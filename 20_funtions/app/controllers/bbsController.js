const modelBbs = require('../models/bbs')
const controller = {}

const formatDate = (rowDate) => {
  const timezoneOffsetDiff = -540 - new Date().getTimezoneOffset()
  const d = new Date(rowDate._seconds * 1000)
  d.setTime(d.getTime() - 1000 * 60 * timezoneOffsetDiff)
  const f = (input) => {
    return ('0' + String(input)).substr(-2)
  }
  return `${d.getFullYear()}/${f(d.getMonth()+1)}/${f(d.getDate())} ${f(d.getHours())}:${f(d.getMinutes())}`
}

controller.create = (req, res) => {
  const now = new Date(Date.now())

  const data = {}
  data.title    = req.body.title
  data.author   = req.body.author
  data.content  = req.body.content
  data.password = req.body.password
  data.comments = []
  data.createdAt = now
  data.updatedAt = now

  modelBbs.create(data, (doc) => {
    res.json({
      isSuccess: true,
      id: doc.id
    })
  })
}

function modelPostGet (req, res) {
  const version = req.params.version
  const id = req.params.id

  database
    .collection(collectionName)
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const tmp = doc.data()
        tmp.auth = (
          typeof req.query.password !== 'undefined' &&
          req.query.password === tmp.password
        )
        tmp.id = doc.id
        tmp.createdAtRaw = tmp.createdAt
        tmp.updatedAtRaw = tmp.updatedAt
        tmp.createdAt = formatDate(tmp.createdAt)
        tmp.updatedAt = formatDate(tmp.updatedAt)
        tmp.comments.forEach((v, i) => {
          tmp.comments[i].createdAtRaw = v.createdAt
          tmp.comments[i].createdAt = formatDate(v.createdAt)
        })
        delete tmp.password
  
        res.json(tmp)
      } else {
        res.json({auth: false})
      }
  })
}

function modelPostPut (req, res) {
  const version = req.params.version
  const id = req.params.id

  database
    .collection(collectionName)
    .doc(id)
    .update({
      title    : req.body.title,
      author   : req.body.author,
      content  : req.body.content,
      password : req.body.password,
      updatedAt: new Date(Date.now()),
    })
    .then((docRef) => {
      res.json({
        isSuccess: true,
        id: docRef.id
      })
    })
}

function modelPostDelete (req, res) {
  const version = req.params.version
  const id = req.params.id

  database
    .collection(collectionName)
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists && (doc.data().password === req.query.password)) {
        database
          .collection(getCollectionName(version))
          .doc(id)
          .delete()
          .then(() => {
            res.json({isSuccess: true})
          })
        database
          .collection('bbs-delete')
          .add(doc.data())
      } else {
        res.json({isSuccess: false})
      }
    })
}

function modelPostCommentPost (req, res) {
  const version = req.params.version
  const id = req.params.id

  database
    .collection(collectionName)
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        let commentsData = doc.data().comments
        commentsData.push({
          author: req.body.author,
          content: req.body.content,
          password: req.body.password,
          createdAt: new Date(Date.now()),
          isDelete: false
        })
        database
          .collection(getCollectionName(version))
          .doc(id)
          .update({comments: commentsData})
          .then(() => {
            res.json({isSuccess: true})
          })
      } else {
        res.json({isSuccess: false})
      }
    })
}

function modelPostCommentDelete (req, res) {
  const version = req.params.version
  const id = req.params.id
  const cid = req.params.cid

  database
    .collection(collectionName)
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists && (doc.data().comments[cid].password === req.query.password)) {
        let commentsData = doc.data().comments
        commentsData[cid].isDelete = true
        database
          .collection(getCollectionName(version))
          .doc(id)
          .update({comments: commentsData})
          .then(() => {
            res.json({isSuccess: true})
          })
      } else {
        res.json({isSuccess: false})
      }
    })
}

function modelPostsGet (req, res) {
  const version = req.params.version

  const response = function (qs) {
    let data = []
    qs.forEach((v) => {
      let tmp = v.data()
      tmp['id'] = v.id
      tmp.createdAtRaw = tmp.createdAt
      tmp.updatedAtRaw = tmp.updatedAt
      tmp.createdAt = formatDate(tmp.createdAt)
      tmp.updatedAt = formatDate(tmp.updatedAt)
      tmp.commentNum = tmp.comments.length
      delete tmp.password
      delete tmp.comments
      data.push(tmp)
    })

    res.json(data)
  }

  if (typeof req.params.id === 'undefined') {
    database
      .collection(collectionName)
      .orderBy('createdAt', 'desc')
      .limit(20)
      .get()
      .then(response)
  } else {
    database
      .collection(collectionName)
      .doc(req.params.id)
      .get()
      .then((doc) => {
        database
          .collection(collectionName)
          .orderBy('createdAt', 'desc')
          .startAfter(doc)
          .limit(20)
          .get()
          .then(response)
    })
  }
}

function modelPostsDateGet (req, res) {
  const version = req.params.version

  if (
    typeof req.params.date === 'undefined' ||
    req.params.date.match(new RegExp(/\d\d\d\d\d\d/)) === null
  ) {
    res.json({err: 'error'})
    return
  }

  const year = req.params.date.substr(0, 4)
  const month = req.params.date.substr(4, 2)
  const startDate = new Date(year + '-' + month + '-01 00:00:00')

  let endDate
  if (month === '12') {
    endDate = new Date(String(Number(year) + 1) + '-01-01 00:00:00')
  } else {
    endDate = new Date(year + '-' + String(Number(month) + 1) + '-01 00:00:00')
  }

  database
    .collection(collectionName)
    .where('createdAt', '>=', startDate)
    .where('createdAt', '<', endDate)
    .orderBy('createdAt', 'desc')
    .get()
    .then((qs) => {
      let data = []
      qs.forEach((v) => {
        let tmp = v.data()
        tmp['id'] = v.id
        tmp.createdAtRaw = tmp.createdAt
        tmp.updatedAtRaw = tmp.updatedAt
        tmp.createdAt = formatDate(tmp.createdAt)
        tmp.updatedAt = formatDate(tmp.updatedAt)
        tmp.commentNum = tmp.comments.length
        delete tmp.content
        delete tmp.password
        delete tmp.comments

        data.push(tmp)
      })

      res.json(data)
    })
}

function modelPostsDatelistGet (req, res) {
  database
    .collection('bbs-month-list')
    .orderBy('createdAt', 'desc')
    .get()
    .then((qs) => {
      qs.forEach((doc) => {
        console.log(doc.data())
      })
    })
}

module.exports = {
  modelPostPost: modelPostPost,
  modelPostGet: modelPostGet,
  modelPostPut: modelPostPut,
  modelPostDelete: modelPostDelete,
  modelPostCommentPost: modelPostCommentPost,
  modelPostCommentDelete: modelPostCommentDelete,
  modelPostsGet: modelPostsGet,
  modelPostsDateGet: modelPostsDateGet,
  modelPostsDatelistGet: modelPostsDatelistGet,
}
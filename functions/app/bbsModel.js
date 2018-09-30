const database = require('./database').database

const getCollectionName = () => {
  return (process.env.ENV === 'TEST') ? 'test-bbs' : 'bbs'
}

const formatDate = (rowDate) => {
  const d = new Date(rowDate._seconds * 1000)
  const f = (input) => {
    return ('0' + String(input)).substr(-2)
  }
  return `${d.getFullYear()}/${f(d.getMonth()+1)}/${f(d.getDate())} ${f(d.getHours())}:${f(d.getMinutes())}`
}

function modelPostPost (req, res) {
  const now = new Date(Date.now())
  database
    .collection(getCollectionName())
    .add({
      title    : req.body.title,
      author   : req.body.author,
      content  : req.body.content,
      password : req.body.password,
      comments : [],
      createdAt: now,
      updatedAt: now,
    })
    .then((docRef) => {
      res.json({
        isSuccess: true,
        id: docRef.id
      })
    })
}
function modelPostGet (req, res) {
  const id = req.params.id
  database.collection(getCollectionName()).doc(id).get().then((doc) => {
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
  const id = req.params.id
  database
    .collection(getCollectionName())
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
  const id = req.params.id
  database
    .collection(getCollectionName())
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists && (doc.data().password === req.query.password)) {
        database
          .collection(getCollectionName())
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
  const id = req.params.id
  database
    .collection(getCollectionName())
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
          .collection(getCollectionName())
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
  const id = req.params.id
  const cid = req.params.cid
  database
    .collection(getCollectionName())
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists && (doc.data().comments[cid].password === req.query.password)) {
        let commentsData = doc.data().comments
        commentsData[cid].isDelete = true
        database
          .collection(getCollectionName())
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
      .collection(getCollectionName())
      .orderBy('createdAt', 'desc')
      .limit(20)
      .get()
      .then(response)
  } else {
    database
      .collection('bbs')
      .doc(req.params.id)
      .get()
      .then((doc) => {
        database
          .collection(getCollectionName())
          .orderBy('createdAt', 'desc')
          .startAfter(doc)
          .limit(20)
          .get()
          .then(response)
    })
  }
}

module.exports = {
  modelPostPost: modelPostPost,
  modelPostGet: modelPostGet,
  modelPostPut: modelPostPut,
  modelPostDelete: modelPostDelete,
  modelPostCommentPost: modelPostCommentPost,
  modelPostCommentDelete: modelPostCommentDelete,
  modelPostsGet: modelPostsGet,
}
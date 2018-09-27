const database = require('./database').database

const getCollectionName = () => {
  return (process.env.ENV === 'TEST') ? 'test-bbs' : 'bbs'
}

const post = {
  setCreate: (title, author, content, password) => {
    const now = new Date(Date.now())
    return {
      title    : title,
      author   : author,
      content  : content,
      password : password,
      comments : [
        {keep: 0}
      ],
      createdAt: now,
      updatedAt: now,
    }
  },
  setUpdate: (title, author, content, password) => {
    const now = new Date(Date.now())
    return {
      title    : title,
      author   : author,
      content  : content,
      password : password,
      updatedAt: now,
    }
  }
}

function modelPostPost (req, res) {
  const data = post.setCreate(req.body.title, req.body.author, req.body.content, req.body.password)
  database.collection(getCollectionName()).add(data).then((docRef) => {
    res.json({id: docRef.id})
  })
}

function modelPostGet (req, res) {
  const id = req.params.id
  database.collection(getCollectionName()).doc(id).get().then((doc) => {
    if (doc.exists) {
      const tmp = doc.data()
      tmp.auth = (typeof req.query.password !== 'undefined' && parseInt(req.query.password) === parseInt(tmp.password))
      tmp.id = doc.id
      delete tmp.password
  
      res.json(tmp)
    }
  })
}

function modelPostPut (req, res) {
  const data = post.setUpdate(req.body.title, req.body.author, req.body.content, req.body.password)
  const id = req.params.id
  database.collection(getCollectionName()).doc(id).update(data).then((docRef) => {
    res.json({id: docRef.id})
  })
}

function modelPostDelete (req, res) {
  const id = req.params.id
  database.collection(getCollectionName()).doc(id).get().then((doc) => {
    if (doc.exists) {
      database.collection(getCollectionName()).doc(id).delete()
      database.collection('bbs-delete').add(doc.data())
      res.json({isSuccess: true})
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
      if (doc.exists && doc.data().comments[cid].password === req.query.password) {
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
        res.json({isSuccess: true})
      }
    })
}

function modelPostsGet (req, res) {
  const response = function (qs) {
    let data = []
    qs.forEach((v) => {
      let tmp = v.data()
      delete tmp.password
      tmp['id'] = v.id
      data.push(tmp)
    })

    res.json(data)
  }

  if (typeof req.params.id === 'undefined') {
    database.collection(getCollectionName()).orderBy('createdAt', 'desc').limit(20).get().then(response)
  } else {
    database.collection('bbs').doc(req.params.id).get().then((doc) => {
      database.collection(getCollectionName()).orderBy('createdAt', 'desc').startAfter(doc).limit(20).get().then(response)
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
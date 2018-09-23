const database = require('./database').database

const collectionName = 'bbs'
//const collectionName = 'bbs-test'

const post = {
  setCreate: (title, author, content, password) => {
    const now = new Date(Date.now())
    return {
      title    : title,
      author   : author,
      content  : content,
      password : password,
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
  database.collection(collectionName).add(data).then((docRef) => {
    console.log(docRef.id)
  })
}

function modelPostGet (req, res) {
  const id = req.params.id
  database.collection('bbs').doc(id).get().then((doc) => {
    if (doc.exists) {
      const tmp = doc.data()
      tmp.auth = (typeof req.query.password !== 'undefined' && parseInt(req.query.password) === tmp.password)
      tmp.id = doc.id
      delete tmp.password
  
      res.json(tmp)
    }
  })
}

function modelPostPut (req, res) {
  const data = post.setUpdate(req.body.title, req.body.author, req.body.content, req.body.password)
  const id = req.params.id
  database.collection(collectionName).doc(id).update(data).then(() => {
    console.log('true')
  })
}

function modelPostDelete (req, res) {
  const id = req.params.id
  database.collection(collectionName).doc(id).get().then((doc) => {
    if (doc.exists) {
      database.collection(collectionName).doc(id).delete()
      database.collection('bbs-delete').add(doc.data())
    } else {
      console.log('false')
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
    database.collection('bbs').orderBy('createdAt', 'desc').limit(20).get().then(response)
  } else {
    database.collection('bbs').doc(req.params.id).get().then((doc) => {
      database.collection('bbs').orderBy('createdAt', 'desc').startAfter(doc).limit(20).get().then(response)
    })
  }
}

module.exports = {
  modelPostPost: modelPostPost,
  modelPostGet: modelPostGet,
  modelPostPut: modelPostPut,
  modelPostDelete: modelPostDelete,
  modelPostsGet: modelPostsGet,
}
const database = require('./database').database

//const collectionName = 'bbs'
const collectionName = 'bbs-test'

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

function modelPostsGet (req, res) {
  database.collection('bbs').limit(20).get().then((qs) => {
    let data = {}
    qs.forEach((doc) => {
      const tmp = doc.data()
      delete tmp.password
      data[doc.id] = tmp
    })
    res.json(data)
  })
}

function modelPostsPost (req, res) {
  const data = post.setCreate(req.body.title, req.body.author, req.body.content, req.body.password)
  database.collection(collectionName).add(data).then((docRef) => {
    console.log(docRef.id)
  })
}

function modelPostsPut (req, res) {
  const data = post.setUpdate(req.body.title, req.body.author, req.body.content, req.body.password)
  const id = req.params.id
  database.collection(collectionName).doc(id).update(data).then(() => {
    console.log('true')
  })
}

function modelPostsDelete (req, res) {
  database.collection(collectionName).doc(req.params.id).get().then((doc) => {
    if (doc.exists) {
      database.collection(collectionName).doc(req.params.id).delete()
      database.collection('bbs-delete').add(doc.data())
    } else {
      console.log('false')
    }
  })
}

function modelPostsAuthGet (req, res) {
  const id = req.params.id
  const password = req.query.password
  database.collection(collectionName).doc(id).get().then((doc) => {
    if (doc.exists) {
      if (doc.data().password === parseInt(password)) {
        res.json('true')
      } else {
        res.json('false')
      }
    } else {
      console.log('false')
    }
  })
}

module.exports = {
  modelPostsGet: modelPostsGet,
  modelPostsPost: modelPostsPost,
  modelPostsPut: modelPostsPut,
  modelPostsDelete: modelPostsDelete,
  modelPostsAuthGet: modelPostsAuthGet
}
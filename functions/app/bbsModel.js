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

function modelPostsGet (req, res) {
  database.collection('bbs').orderBy('createdAt', 'desc').limit(20).get().then((qs) => {
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

function modelPostsPIdGet (req, res) {
  const id = req.params.id
  database.collection('bbs').doc(id).get().then((doc) => {
    database.collection('bbs').orderBy('createdAt', 'desc').startAfter(doc).limit(20).get().then((qs) => {
      let data = {}
      qs.forEach((v) => {
        const tmp = v.data()
        delete tmp.password
        data[v.id] = tmp
      })
      res.json(data)
    })
  })
}

function modelPostsPIdPut (req, res) {
  const data = post.setUpdate(req.body.title, req.body.author, req.body.content, req.body.password)
  const id = req.params.id
  database.collection(collectionName).doc(id).update(data).then(() => {
    console.log('true')
  })
}

function modelPostsPIdDelete (req, res) {
  database.collection(collectionName).doc(req.params.id).get().then((doc) => {
    if (doc.exists) {
      database.collection(collectionName).doc(req.params.id).delete()
      database.collection('bbs-delete').add(doc.data())
    } else {
      console.log('false')
    }
  })
}

function modelPostsPIdAuthGet (req, res) {
  const id = req.params.id
  const password = req.query.password
  database.collection(collectionName).doc(id).get().then((doc) => {
    if (doc.exists) {
      if (doc.data().password === parseInt(password)) {
        res.json({'auth': true})
      } else {
        res.json({'auth': false})
      }
    } else {
      res.json({'auth': false})
    }
  })
}

module.exports = {
  modelPostsGet: modelPostsGet,
  modelPostsPost: modelPostsPost,
  modelPostsPIdGet: modelPostsPIdGet,
  modelPostsPIdPut: modelPostsPIdPut,
  modelPostsPIdDelete: modelPostsPIdDelete,
  modelPostsPIdAuthGet: modelPostsPIdAuthGet
}
const fs = require('fs')
const firebase = require('firebase')
const firebaseConfig = require('../firebase-config')

require("firebase/firestore")

// 引数で環境切り替え
firebase.initializeApp(firebaseConfig.prod)
const db = firebase.firestore()
db.settings({});

const filePath = __dirname + '/bbs_data.json'
const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

json.forEach((v) => {
  let data = {
    title: v.title,
    author: v.author,
    content: v.content,
    password: v.password,
    comments: [],
    createdAt: new Date(v.createdAt),
    updatedAt: new Date(v.updatedAt),
    deletedAt: null,
  }

  v.comments.forEach((comment) => {
    data.comments.push({
      author: comment.author,
      content: comment.content,
      password: comment.password,
      createdAt: new Date(comment.createdAt),
      deletedAt: null
    })
  })

  db.collection('bbs').add(data)
})

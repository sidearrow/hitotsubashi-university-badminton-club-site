const fs = require('fs')
const firebase = require('firebase')
const config = require('../config')

require("firebase/firestore")

// 引数で環境切り替え
firebase.initializeApp(config.firebase.dev)
const db = firebase.firestore()
db.settings({});

const filePath = __dirname + '/bbs_data.json'
const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

json.forEach((v) => {
  db.collection('bbs').add({
    title: v.title,
    author: v.author,
    content: v.content,
    password: v.password,
    comments: v.comments,
    createdAt: new Date(v.createdAt),
    updatedAt: new Date(v.updatedAt),
  })
})
const fs = require('fs')
const firebase = require('firebase')
const config = require(__dirname + '/../config')

require("firebase/firestore")
firebase.initializeApp(config.firebase)
const db = firebase.firestore()
const settings = {timestampsInSnapshots: true};
db.settings(settings);

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
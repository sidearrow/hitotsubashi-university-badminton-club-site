const fs = require('fs')
const firebase = require('firebase')
const config = require('../slf-config')

require("firebase/firestore")
firebase.initializeApp(config.firebase)
const db = firebase.firestore()
const settings = {timestampsInSnapshots: true};
db.settings(settings);

const filePath = __dirname + '/bbs-data.json'
const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

json.forEach((v) => {
  const tmp = new Date((new Date(v.date)).getTime() + 36000000)
  db.collection('bbs').add({
    title: v.title,
    author: v.name,
    content: v.content,
    password: parseInt(v.password),
    createdAt: tmp,
    updatedAt: tmp,
  })
})
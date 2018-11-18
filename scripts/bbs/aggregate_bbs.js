const fs = require('fs')
const firebase = require('firebase')
const config = require(__dirname + '/../config')

require("firebase/firestore")
firebase.initializeApp(config.firebase)
const db = firebase.firestore()
const settings = {timestampsInSnapshots: true};
db.settings(settings);

const aggregate = async () => {
  const querySnapshot = await db.collection('bbs').get()
  let date, key
  let data = {}
  querySnapshot.forEach((v) => {
    date = new Date(v.data().createdAt.seconds * 1000)
    key = String(date.getFullYear()) + '-' + String(date.getMonth() + 1)

    if (typeof data[key] === 'undefined') {
      data[key] = 1
    } else {
      data[key]++
    }
  })

  db
    .collection('bbs-month-list')
    .doc('index')
    .set(data)
}

aggregate()
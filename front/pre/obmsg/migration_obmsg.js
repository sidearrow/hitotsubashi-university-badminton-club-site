const fs = require('fs')
const firebase = require('firebase')
const config = require('../../slf-config')

require('firebase/firestore')
firebase.initializeApp(config.firebase)

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

const filePath = __dirname + '/obmsg.json'
const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

for (let k in json) {
  db.collection('obmsg').doc(k).set({
    url: json[k]
  })
}
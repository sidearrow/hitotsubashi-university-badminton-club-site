const firebase = require('firebase')
const config = require('../config')

require('firebase/firestore')
firebase.initializeApp(config.firebase)
const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

db
  .collection('bbs')
  .get()
  .then((qs) => {
    qs.forEach((v) => {
      db
        .collection('bbs')
        .doc(v.id)
        .update({
          comments: []
        })
    })
})
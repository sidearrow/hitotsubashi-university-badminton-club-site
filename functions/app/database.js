const admin = require('firebase-admin')
const serviceAccount = require('./hit-u-bad-92125f8fa850.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const database = admin.firestore()

database.settings({
  timestampsInSnapshots: true
})

exports.database = database
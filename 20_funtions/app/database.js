const admin = require('firebase-admin')

const serviceAccount = require(
  '../firebase-secret-key/' +
  ((process.env.NODE_ENV === 'production') ? 'prod.json' : 'dev.json')
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const database = admin.firestore()

database.settings({
  timestampsInSnapshots: true
})

module.exports = database
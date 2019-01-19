const admin = require('firebase-admin')
const config = require('../config/index')

const serviceAccount = require(
  '../firebase-secret-key/' +
  ((process.env.NODE_ENV === 'production') ? 'prod.json' : 'dev.json')
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: config.bucketName
})

const services = {}

services.database = admin.firestore()
services.database.settings({
  timestampsInSnapshots: true
})

services.stroage = admin.storage()

module.exports = services
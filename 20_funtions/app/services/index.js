const admin = require('firebase-admin')
const config = require('../config/index')

const serviceAccount = require(
  '../firebase-secret-key/' +
  ((config.env === 'prod') ? 'prod.json' : 'dev.json')
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

module.exports = services
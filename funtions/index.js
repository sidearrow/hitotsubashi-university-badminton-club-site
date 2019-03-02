const functions = require('firebase-functions')
const app = require('./app/app.js')

exports.api = functions.region('asia-northeast1').https.onRequest(app)
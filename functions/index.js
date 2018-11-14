const functions = require('firebase-functions')
const app = require('./app/controller').app

exports.api = functions.region('asia-northeast1').https.onRequest(app)
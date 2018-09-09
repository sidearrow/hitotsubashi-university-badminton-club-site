const functions = require('firebase-functions')
const app = require('./app/controller').app

exports.route = functions.https.onRequest(app)
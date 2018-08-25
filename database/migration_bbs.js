const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/data/bbs-data.json`, 'utf-8'));

const firebase = require('firebase');
const config = require('../slf-config');

require("firebase/firestore");
firebase.initializeApp(config.firebase);
const db = firebase.firestore();

data.forEach((v) => {
  db.collection('bbs').add(v);
});

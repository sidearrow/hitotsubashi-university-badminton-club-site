const fs = require('fs');
const csv = require('csv-parse/lib/sync');

const data = csv(fs.readFileSync(`${__dirname}/data/ob-msg.csv`));
const res = {};

data.forEach((v, i) => {
  if (i === 0) {
    return;
  }
  if (typeof res[v[1]] === 'undefined') {
    res[v[1]] = {};
  }
  res[v[1]][v[0]] = {
    name: v[2],
    url: v[3],
  };
});

// firestore
const firebase = require('firebase');
const config = require('../slf-config');

require("firebase/firestore");
firebase.initializeApp(config.firebase);
const db = firebase.firestore();

db.collection('mizutori').doc('ob-msg').set(res).then(() => {
  console.log('OK');
  process.exit();
});
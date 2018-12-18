const fs = require('fs')
const firebase = require('firebase')
const config = require(__dirname + '/../config')

require("firebase/firestore")
firebase.initializeApp(config.firebase)
const db = firebase.firestore()
const settings = {timestampsInSnapshots: true};
db.settings(settings);

const aggregate = async () => {
  const querySnapshot = await db.collection('bbs').get()
  let date, key, year, month
  let data = {}
  querySnapshot.forEach((v) => {
    date = new Date(v.data().createdAt.seconds * 1000)
    year = String(date.getFullYear())
    month = String(date.getMonth() + 1)
    key = year + ('0' + month).substr(-2)

    if (typeof data[key] === 'undefined') {
      view = 
      data[key] = {
        num: 1,
        view: year + ' 年 ' + month + ' 月',
        createdAt: new Date(year, date.getMonth())
      }
    } else {
      data[key].num++
    }
  })

  for (let key in data) {
    db
      .collection('bbs-month-list')
      .doc(key)
      .set(data[key])
  }
}

aggregate()
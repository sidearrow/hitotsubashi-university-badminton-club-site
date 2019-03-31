global.XMLHttpRequest = require("xhr2")

const fs = require('fs')
const firebase = require('firebase')
const firebaseConfig = require('../firebase-config').prod

require("firebase/storage")
firebase.initializeApp(firebaseConfig)

const fileList = require('./obmsg_list') 

const getId = (fileName) => fileName.slice(10, 16)
const getUrl = async (fileName) => await firebase.storage().ref('obmsg/' + fileName).getDownloadURL()

const exec = async () => {
  let data = {}
  const l = fileList.length
  for (let i = 0; i < l; i++) {
    data[getId(fileList[i])] = await getUrl(fileList[i])
  }
  fs.writeFileSync('./obmsg.json', JSON.stringify(data))
  process.exit(1)
}

exec()

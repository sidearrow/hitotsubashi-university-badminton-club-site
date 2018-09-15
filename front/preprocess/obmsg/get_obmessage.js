global.XMLHttpRequest = require("xhr2");

const fs = require('fs')
const firebase = require('firebase')
const config = require('../../slf-config')
const fileList = JSON.parse(fs.readFileSync(__dirname + '/obmsg_list.json', 'utf-8'))

require("firebase/storage")
firebase.initializeApp(config.firebase)

const storageRef = firebase.storage().ref()

let index = 0
const length = fileList.length
let data = {}

const getUrl = (index) => {
  console.log(index)
  if (index >= length) {
    fs.writeFileSync(__dirname + '/obmsg.json', JSON.stringify(data))
    return
  }

  const now = fileList[index]
  let fileName = ''
  if (parseInt(now) >= 201305) {
    fileName = `obmessage_${now}.pdf`
  } else {
    fileName = `obmessage_${now}.html`
  }
  storageRef.child(`ob-msg/${fileName}`).getDownloadURL().then((url) => {
    data[now] = url
    getUrl(++index)
  })
}

getUrl(index)
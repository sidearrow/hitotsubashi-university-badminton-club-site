import firebase from '@firebase/app'
import '@firebase/storage'
import config from './config'

firebase.initializeApp(config.firebase.dev)
const storage = firebase.storage()

const upload = async (path, file) => {
  const ref = storage.ref().child(path)
  await ref.put(file)
  return await ref.getDownloadURL()
}

const _ = {}

_.obMsgUpload = async (name, file) => {
  return await upload('obmsg/' + name, file)
}

export default _
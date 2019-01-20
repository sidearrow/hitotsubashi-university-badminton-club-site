const database = require('../services/index').database
const collectionName = 'bbs'

const model = {}

model.get = (id, callback) => {
  database
    .collection(collectionName)
    .doc(id)
    .get()
    .then((doc) => {
      callback(Object.assign(
        doc.data(), { id: doc.id }
      ))
    })
}

model.create = (data, callback) => {
  database
    .collection(collectionName)
    .add(data)
    .then((doc) => callback(doc.id))
}

model.update = (id, data, callback) => {
  database
    .collection(collectionName)
    .doc(id)
    .update(data)
    .then(() => callback())
}

model.delete = (id, callback) => {
  database
    .collection(collectionName)
    .doc(id)
    .delete()
    .then(() => callback())
}

module.exports = model
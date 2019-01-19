const database = require('../services/index').database
const collectionName = 'members'

let model = {}

model.schema = {
  name_family: '',
  name_given: '',
  year: 0,
  highschool: '',
  prefecture: '',
  intro: '',
  img: '',
}

model.getAll = function (callback) {
  database
    .collection('members')
    .get()
    .then((qs) => {
      let data = []
      qs.forEach((v) => {
        data.push(v.data())
      })

      callback(data)
    })
}

model.create = function (data, callback) {
  database
    .collection(collectionName)
    .add(data)
    .then((docRef) => callback(docRef.id))
}

model.update = function (id, data, callback) {
  database
    .collection(collectionName)
    .doc(id)
    .update(data)
    .then(() => callback())
}

model.delete = function (id, callback) {
  database
    .collection(collectionName)
    .doc(id)
    .delete()
    .then(() => callback())
}

module.exports = model
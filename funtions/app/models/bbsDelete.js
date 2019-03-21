const database = require('../firestore')
const collectionName = 'bbs-delete'

const model = {}

model.create = async (data) => {
  await database.collection(collectionName).add(data)
  return true
}

module.exports = model

const database = require('../services/index').database
const collectionName = 'bbs'

const model = {}

model.get = async (id) => {
  const doc = await database.collection(collectionName).doc(id).get()
  return Object.assign(doc.data(), { id: doc.id })
}

model.getPage = async (id = null) => {
  let docs = {}
  if (id) {
    const prevLastDocs = await database.collection(collectionName).doc(id).get()
    docs = await database.collection(collectionName)
                   .orderBy('createdAt', 'desc').startAfter(prevLastDocs).limit(20).get()
  } else {
    docs = await database.collection(collectionName)
                   .orderBy('createdAt', 'desc').limit(20).get()
  }

  let res = []
  docs.forEach(doc => {
    const tmp = doc.data()
    tmp.id = doc.id
    tmp.commentsNum = tmp.comments.length
    delete tmp.password
    delete tmp.comments

    res.push(tmp)
  })

  return res
}

model.create = async (data) => {
  const doc = await database.collection(collectionName).add(data)
  return doc.id
}

model.update = async (id, data) => {
  await database.collection(collectionName).doc(id).update(data)
  return true
}

model.delete = async (id) => {
  await database.collection(collectionName).doc(id).delete()
  return true
}

module.exports = model
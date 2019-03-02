const database = require('../services/index').database
const util = require('../util')
const collectionName = 'bbs'

const model = {}
const formatResponse = (doc, isDetail = false) => {
  const data = doc.data()
  data.id = doc.id
  data.createdAtRaw = data.createdAt
  data.updatedAtRaw = data.updatedAt
  data.createdAt = util.getDateString(data.createdAt.toDate())
  data.updatedAt = util.getDateString(data.updatedAt.toDate())
  delete data.password

  if (isDetail && data.comments.length > 0) {
    data.comments.forEach((v, i) => {
      if (v.isDelete) {
        data.comments[i] = { isDelete: true }
      } else {
        data.comments[i].createdAt = util.getDateString(v.createdAt.toDate())
        delete data.comments[i].password
      }
    })
  } else {
    data.commentsNum = data.comments.length
    delete data.comments
  }

  return data
}

model.get = async (id) => {
  const doc = await database.collection(collectionName).doc(id).get()
  return formatResponse(doc, true)
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
    res.push(formatResponse(doc))
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

model.getDateNarrow = async (year, month) => {
  const docs = await database.collection(collectionName)
                       .where('createdAt', '>=', new Date(year, month-1))
                       .where('createdAt', '<', new Date(year, month))
                       .orderBy('createdAt', 'desc')
                       .get()

  let res = []
  docs.forEach(doc => {
    res.push(formatResponse(doc))
  })

  return res
}

module.exports = model
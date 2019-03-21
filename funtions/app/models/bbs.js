const database = require('../firestore')
const util = require('../util')
const collectionName = 'bbs'

const model = {}
const formatResponse = (id, data, isDetail = false, password = null) => {
  data.id = id
  data.createdAtRaw = data.createdAt
  data.updatedAtRaw = data.updatedAt
  data.createdAt = util.getDateString(data.createdAt.toDate())
  data.updatedAt = util.getDateString(data.updatedAt.toDate())

  // コメント
  if (isDetail) {
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

  // 認証
  data.auth = false
  if (password !== null && data.password === password) {
    data.auth = true
  }
  delete data.password

  return data
}

model.get = async (id, password) => {
  const doc = await database.collection(collectionName).doc(id).get()
  return formatResponse(doc.id, doc.data(), true, password)
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
    res.push(formatResponse(doc.id, doc.data()))
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
    res.push(formatResponse(doc.id, doc.data()))
  })

  return res
}

module.exports = model

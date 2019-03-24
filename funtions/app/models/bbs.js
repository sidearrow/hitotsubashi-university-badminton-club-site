const database = require('../firestore')
const collectionName = 'bbs'

const _ = {}

/**
 * @param  {string} id
 * @return {FirebaseFirestore.DocumentSnapshot}
 */
_.get = async (id) => {
  return await database.collection(collectionName).doc(id).get()
}

/**
 * @param  {string} id
 * @return {FirebaseFirestore.QuerySnapshot}
 */
_.getPage = async (id = null) => {
  if (id) {
    const prevLastDocs = await database.collection(collectionName).doc(id).get()
    return await database.collection(collectionName).where('deletedAt', '==', null)
                   .orderBy('createdAt', 'desc').startAfter(prevLastDocs).limit(20).get()
  } else {
    return await database.collection(collectionName).where('deletedAt', '==', null).orderBy('createdAt', 'desc').limit(20).get()
  }
}

/**
 * @param  data
 * @return {string}
 */
_.create = async (data) => {
  const doc = await database.collection(collectionName).add(data)
  return doc.id
}

_.update = async (id, data) => {
  await database.collection(collectionName).doc(id).update(data)
}

_.delete = async (id) => {
  await database.collection(collectionName).doc(id).update({ deletedAt: new Data() })
}

_.getDateNarrow = async (year, month) => {
  return await database.collection(collectionName)
                       .where('createdAt', '>=', new Date(year, month-1))
                       .where('createdAt', '<', new Date(year, month))
                       .orderBy('createdAt', 'desc')
                       .get()
}

module.exports = _

const database = require('../firestore')
const collectionName = 'bbs-month-list'

const _ = {}

_.get = async () => {
  const docs = await database.collection(collectionName).orderBy('id', 'desc').get()

  let res = []
  docs.forEach((doc) => {
    res.push(doc.data())
  })

  return res
}

_.updateNumIncrement = async (month) => {
  const targetDocRef =  database.collection(collectionName).doc(month)
  const targetDoc = await targetDocRef.get()
  if (targetDoc.exists) {
    targetDocRef.update({
      num: targetDoc.data().num + 1,
    })
  } else {
    targetDocRef.set({
      id: Number(month),
      num: 1,
    })
  }
}

_.updateNumDecrement = async (month) => {
  const targetDocRef = database.collection(collectionName).doc(month)
  const targetDoc = await targetDocRef.get()
  targetDocRef.update({
    num: targetDoc.data().num - 1,
  })
}

module.exports = _

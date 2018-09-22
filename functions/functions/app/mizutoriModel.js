const database = require('./database').database

function modelObmsgGet (req, res) {
  database.collection('obmsg').get().then((qs) => {
    let data = {}
    qs.forEach((doc) => {
      data[doc.id] = doc.data().url
    })
    res.json(data)
  })
}

module.exports = {
  modelObmsgGet: modelObmsgGet,
}
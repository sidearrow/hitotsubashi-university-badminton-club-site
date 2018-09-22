const database = require('./database').database

function modelIndexGet (req, res) {
  const inputPassword = req.query.password
  database.collection('config').doc('mizutori').get().then((doc) => {
    res.json({auth: doc.data().password === inputPassword})
  })
}

function modelObmsgGet (req, res) {
  database.collection('obmsg').get().then((qs) => {
    let _data = {}
    let keys = []
    qs.forEach((doc) => {
      const id = parseInt(doc.id)
      const year = Math.floor(id / 100)
      const month = id % 100
      const name = (year >= 2011) ? `${month}月号` : `第${month}号`
      if (typeof _data[year] === 'undefined') {
        _data[year] = []
        keys.push(year)
      }
      _data[year].push({
        name: name,
        url: doc.data().url
      })
    })

    keys.sort(function(a, b) {
      if (a > b) return -1
      if (a < b) return 1
      return 0
    })

    let data = []
    keys.forEach((v) => {
      data.push({
        year: v,
        data: _data[v]
      })
    })
    res.json(data)
  })
}

module.exports = {
  modelIndexGet: modelIndexGet,
  modelObmsgGet: modelObmsgGet,
}
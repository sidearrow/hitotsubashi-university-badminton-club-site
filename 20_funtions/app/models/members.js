const database = require('../database')

const index = function (_, res) {
  let data = []
  database
    .collection('members')
    .get()
    .then((qs) => {
      qs.forEach((v) => {
        data.push(v.data())
      })

      res.json(data)
    })

}

module.exports = {
  index: index,
}
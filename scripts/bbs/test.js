const fs = require('fs')

const json = JSON.parse(fs.readFileSync(__dirname + '/bbs_data.json'))

let data = []
json.forEach((v) => {
  if (typeof v.author === 'undefined') {
    if (typeof v.name === 'string') {
      v.author = v.name
      delete v.name
    } else {
      console.log(v.createdAt)
    }
  }
  data.push(v)
})

fs.writeFileSync(__dirname + '/bbs_data_1.json', JSON.stringify(data))
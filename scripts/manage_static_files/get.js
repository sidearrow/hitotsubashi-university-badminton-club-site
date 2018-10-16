const fs = require('fs')

const rootPath = __dirname + '/../../front/public/static'
const dammyPath = 'static'

let res = [];

const getItems = ((path) => {
  let items = fs.readdirSync(rootPath + path)

  items.forEach((v) => {
    if (fs.statSync(rootPath + path + v).isDirectory()) {
      getItems(path + v + '/')
    } else {
      res.push(dammyPath + path + v)
    }
  })
})

getItems('/')

let text = ''
res.forEach((v) => {
  text += v + "\n"
})

fs.writeFileSync(__dirname + '/file_list', text)
const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  next()
})

app.use('/:version/bbs', controllers.bbs)
app.use('/:version/mizutori', controllers.mizutori)
app.use('/:version/members', controllers.members)

module.exports = app
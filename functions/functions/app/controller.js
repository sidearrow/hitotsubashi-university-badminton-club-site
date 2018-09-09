const express = require('express')
const bodyParser = require('body-parser')
const bbsModel = require('./bbsModel')

const app = express()

const bbsRouter = express.Router()
bbsRouter.get('/posts', bbsModel.modelPostsGet)
bbsRouter.post('/posts', bbsModel.modelPostsPost)
bbsRouter.put('/posts/:id', bbsModel.modelPostsPut)
bbsRouter.delete('/posts/:id', bbsModel.modelPostsDelete)
bbsRouter.get('/posts/:id/auth', bbsModel.modelPostsAuthGet)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/bbs', bbsRouter)

exports.app = app
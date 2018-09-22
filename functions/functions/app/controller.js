const express = require('express')
const bodyParser = require('body-parser')
const bbsModel = require('./bbsModel')
const mizutoriModel = require('./mizutoriModel')

const app = express()

const bbsRouter = express.Router()
bbsRouter.get('/posts', bbsModel.modelPostsGet)
bbsRouter.post('/posts', bbsModel.modelPostsPost)
bbsRouter.get('/posts/:id', bbsModel.modelPostsPIdGet)
bbsRouter.put('/posts/:id', bbsModel.modelPostsPIdPut)
bbsRouter.delete('/posts/:id', bbsModel.modelPostsPIdDelete)
bbsRouter.get('/posts/:id/auth', bbsModel.modelPostsPIdAuthGet)

const mizutoriRouter = express.Router()
mizutoriRouter.get('/obmsg', mizutoriModel.modelObmsgGet)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/bbs', bbsRouter)
app.use('/mizutori', mizutoriRouter)

exports.app = app
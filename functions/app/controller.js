const express = require('express')
const bodyParser = require('body-parser')
const bbsModel = require('./bbsModel')
const mizutoriModel = require('./mizutoriModel')

const app = express()

/*
 * /bbs
 */
const bbsRouter = express.Router()
bbsRouter.post('/post', bbsModel.modelPostPost)

bbsRouter.get('/post/:id', bbsModel.modelPostGet)
bbsRouter.put('/post/:id', bbsModel.modelPostPut)
bbsRouter.delete('/post/:id', bbsModel.modelPostDelete)

bbsRouter.get('/posts', bbsModel.modelPostsGet)
bbsRouter.get('/posts/:id', bbsModel.modelPostsGet)

/*
 * /mizutori
 */
const mizutoriRouter = express.Router()
mizutoriRouter.get('/', mizutoriModel.modelIndexGet)
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
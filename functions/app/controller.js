const express = require('express')
const bodyParser = require('body-parser')
const bbsModel = require('./bbsModel')
const mizutoriModel = require('./mizutoriModel')

const app = express()

/*
 * /bbs
 */
const bbsRouter = express.Router({ mergeParams: true })
bbsRouter.post('/post', bbsModel.modelPostPost)

bbsRouter.get('/post/:id', bbsModel.modelPostGet)
bbsRouter.put('/post/:id', bbsModel.modelPostPut)
bbsRouter.delete('/post/:id', bbsModel.modelPostDelete)

bbsRouter.post('/post/:id/comment', bbsModel.modelPostCommentPost)
bbsRouter.delete('/post/:id/comment/:cid', bbsModel.modelPostCommentDelete)

bbsRouter.get('/posts', bbsModel.modelPostsGet)
bbsRouter.get('/posts/:id', bbsModel.modelPostsGet)
bbsRouter.get('/posts/date/:date', bbsModel.modelPostsDateGet)

bbsRouter.get('/posts/datelist', bbsModel.modelPostsDatelistGet)

/*
 * /mizutori
 */
const mizutoriRouter = express.Router({ mergeParams: true })
mizutoriRouter.get('/', mizutoriModel.modelIndexGet)
mizutoriRouter.get('/obmsg', mizutoriModel.modelObmsgGet)


/*
 * share
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  next()
})

app.use('/:version/bbs', bbsRouter)
app.use('/:version/mizutori', mizutoriRouter)

exports.app = app
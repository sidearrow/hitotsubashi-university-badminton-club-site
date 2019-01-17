const express = require('express')
const bbsModel = require('../models/bbsModel')
const mizutoriModel = require('../models/mizutoriModel')
const modelMembers = require('../models/members')

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

const membersRouter = express.Router({ mergeParams: true })
membersRouter.get('/', modelMembers.index)

module.exports = {
  bbs: bbsRouter,
  mizutori: mizutoriRouter,
  members: membersRouter,
}
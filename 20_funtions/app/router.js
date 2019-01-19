const express = require('express')
const bbsModel = require('./models/bbsModel')
const mizutoriModel = require('./models/mizutoriModel')
const membersController = require('./controllers/membersController')

const router = express.Router()
router.post('bbs/post', bbsModel.modelPostPost)

router.get('bbs/post/:id', bbsModel.modelPostGet)
router.put('bbs/post/:id', bbsModel.modelPostPut)
router.delete('bbs/post/:id', bbsModel.modelPostDelete)

router.post('bbs/post/:id/comment', bbsModel.modelPostCommentPost)
router.delete('bbs/post/:id/comment/:cid', bbsModel.modelPostCommentDelete)

router.get('bbs/posts', bbsModel.modelPostsGet)
router.get('bbs/posts/:id', bbsModel.modelPostsGet)
router.get('bbs/posts/date/:date', bbsModel.modelPostsDateGet)

router.get('bbs/posts/datelist', bbsModel.modelPostsDatelistGet)

router.get('mizutori/', mizutoriModel.modelIndexGet)
router.get('mizutori/obmsg', mizutoriModel.modelObmsgGet)

router.route('/members')
  .get(membersController.indexGet)
  .post(membersController.indexPost)
router.route('/members/:id')
  .put(membersController.indexIdPut)
  .delete(membersController.indexIdDelete)

module.exports = router
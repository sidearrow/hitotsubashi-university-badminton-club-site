const express = require('express')
const bbsModel = require('./models/bbsModel')
const mizutoriModel = require('./models/mizutoriModel')
const membersController = require('./controllers/membersController')

const router = express.Router()
router.route('/bbs/posts')
  .get(bbsController.index)
  .post(bbsController.create)

router.route('/bbs/posts/:id')
  .get(bbsController.show)
  .put(bbsController.update)
  .delete(bbsController.delete)

router.route('/bbs/posts/:id/comment')
  .post(bbsController.commentCreate)

router.route('/bbs/posts/:id/comment/:cid')
  .delete(bbsController.commentDelete)

router.get('/bbs/posts/date/:date', bbsModel.modelPostsDateGet)

router.get('/bbs/posts/datelist', bbsModel.modelPostsDatelistGet)

router.get('/mizutori/', mizutoriModel.modelIndexGet)
router.get('/mizutori/obmsg', mizutoriModel.modelObmsgGet)

router.route('/members')
  .get(membersController.indexGet)
  .post(membersController.indexPost)

router.route('/members/:id')
  .get(membersController.indexIdGet)
  .put(membersController.indexIdPut)
  .delete(membersController.indexIdDelete)

module.exports = router
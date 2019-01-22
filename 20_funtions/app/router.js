const express = require('express')
const bbsController = require('./controllers/bbsController')
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

router.route('/bbs/posts/:id/comments')
  .post(bbsController.commentsCreate)
router.route('/bbs/posts/:id/comments/:cid')
  .delete(bbsController.commentsDelete)


router.route('/bbs/posts/date/:date')
  .get(bbsController.dateIndex)

/*
router.get('/bbs/posts/datelist', bbsModel.modelPostsDatelistGet)

router.get('/mizutori/', mizutoriModel.modelIndexGet)
router.get('/mizutori/obmsg', mizutoriModel.modelObmsgGet)
*/

/*
router.route('/members')
  .get(membersController.indexGet)
  .post(membersController.indexPost)

router.route('/members/:id')
  .get(membersController.indexIdGet)
  .put(membersController.indexIdPut)
  .delete(membersController.indexIdDelete)
*/
module.exports = router
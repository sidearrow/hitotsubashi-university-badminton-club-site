const express = require('express')

const config = require('./config')
const bbsController = require('./controllers/bbsController')

const router = express.Router()

router.get('/bbs/posts', bbsController.index)
router.post('/bbs/posts', bbsController.create)
router.get('/bbs/posts/:id', bbsController.show)
router.put('/bbs/posts/:id', bbsController.update)
router.delete('/bbs/posts/:id', bbsController.delete)

router.post('/bbs/posts/:id/comments', bbsController.commentsCreate)
router.delete('/bbs/posts/:id/comments/:cid', bbsController.commentsDelete)

router.get('/mizutori/login', (req, res) => {
  return res.json({ login: req.query.password === config.mizutoriPassword })
})
router.get('/mizutori/obmsg', (_, res) => {
  return res.json(JSON.parse(require('./resources/obmsg')))
})

module.exports = router

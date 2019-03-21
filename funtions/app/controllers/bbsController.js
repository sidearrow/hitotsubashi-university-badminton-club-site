const modelBbs = require('../models/bbs')
const modelBbsDelete = require('../models/bbsDelete')
const modelBbsDateList = require('../models/bbsDateList')
const util = require('../util')
const controller = {}

controller.create = async (req, res) => {
  const now = new Date(Date.now())

  const data = {}
  data.title     = req.body.title
  data.author    = req.body.author
  data.content   = req.body.content
  data.password  = req.body.password
  data.comments  = []
  data.createdAt = now
  data.updatedAt = now

  const id = await modelBbs.create(data)
  modelBbsDateList.updateNumIncrement(util.getMonthString(data.createdAt))

  res.json({
    isSuccess: true,
    id: id
  })
}

controller.show = async (req, res) => {
  const id = req.params.id
  const queryPassword = req.query.password

  res.json(
    await modelBbs.get(id, queryPassword)
  )
}

controller.update = async (req, res) => {
  const id = req.params.id

  const data = {}
  data.title     = req.body.title
  data.author    = req.body.author
  data.content   = req.body.content
  data.password  = req.body.password
  data.updatedAt = new Date(Date.now())

  await modelBbs.update(id, data)
  res.json({
    isSuccess: true
  })
}

controller.delete = async (req, res) => {
  const reqId = req.params.id
  const reqPassword = req.query.password

  const target = await modelBbs.get(reqId)
  if (target.password === reqPassword) {
    await modelBbs.delete(reqId)
    modelBbsDelete.create(target)
    modelBbsDateList.updateNumDecrement(util.getMonthString(target.createdAtRaw.toDate()))
    res.json({isSuccess: true})
  } else {
    res.json({isSuccess: false})
  }
}

controller.commentsCreate = async (req, res) => {
  const reqId = req.params.id

  const data = {}
  data.author    = req.body.author
  data.content   = req.body.content
  data.password  = req.body.password
  data.createdAt = new Date(Date.now())
  data.isDelete  = false

  const target = await modelBbs.get(reqId)
  target.comments.push(data)
  const updateData = { comments: target.comments}
  await modelBbs.update(reqId, updateData)

  res.json({isSuccess: true})
}

controller.commentsDelete = async (req, res) => {
  const reqId = req.params.id
  const reqCid = req.params.cid
  const reqPassword = req.query.password

  const target = await modelBbs.get(reqId)
  if (target.comments[reqCid].password === reqPassword) {
    target.comments[reqCid].isDelete = true
    const updateData = { comments: target.comments }
    await modelBbs.update(reqId, updateData)

    res.json({isSuccess: true})
  } else {
    res.json({isSuccess: false})
  }
}

controller.index = async (req, res) => {
  const reqId = req.query.id

  let resData = []
  if (typeof reqId === 'undefined') {
    resData = await modelBbs.getPage()
  } else {
    resData = await modelBbs.getPage(reqId)
  }

  res.json(resData)
}

controller.dateIndex = async (req, res) => {
  if (
    typeof req.params.date === 'undefined' ||
    req.params.date.match(new RegExp(/\d\d\d\d\d\d/)) === null
  ) {
    res.json({err: 'error'})
    return
  }

  const year = Number(req.params.date.substr(0, 4))
  const month = Number(req.params.date.substr(4, 2))

  const data = await modelBbs.getDateNarrow(year, month)
  res.json(data)
}

controller.dateListIndex = async (req, res) => {
  const data = await modelBbsDateList.get()
  res.json(data)
}

module.exports = controller

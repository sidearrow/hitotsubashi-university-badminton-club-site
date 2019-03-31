const modelBbs = require('../models/bbs')
const util = require('../util')
const controller = {}

controller.create = async (req, res) => {
  const now = new Date()

  const data = {
    title    : req.body.title,
    author   : req.body.author,
    content  : req.body.content,
    password : req.body.password,
    comments : [],
    createdAt: now,
    updatedAt: now,
    deletedAt: null,
  }

  const id = await modelBbs.create(data)

  res.json({
    isSuccess: true,
    id: id
  })
}

controller.show = async (req, res) => {
  const id = req.params.id
  const queryPassword = req.query.password

  const doc = await modelBbs.get(id)
  const docData = doc.data()

  const resData = {
    id       : doc.id,
    auth     : queryPassword === docData.password,
    author   : docData.author,
    title    : docData.title,
    content  : docData.content,
    comments : [],
    createdAt: util.getDateString(docData.createdAt.toDate()),
    updatedAt: util.getDateString(docData.updatedAt.toDate()),
  }
  docData.comments.forEach((v) => {
    if (v.deletedAt === null) {
      resData.comments.push({
        isDelete : false,
        author   : v.author,
        content  : v.content,
        createdAt: util.getDateString(v.createdAt.toDate()),
      })
    } else {
      resData.comments.push({ isDelete: true })
    }
  })

  res.json(resData)
}

controller.update = async (req, res) => {
  const id = req.params.id

  const data = {
    title    : req.body.title,
    author   : req.body.author,
    content  : req.body.content,
    password : req.body.password,
    updatedAt: new Date(),
  }

  await modelBbs.update(id, data)
  res.json({
    isSuccess: true
  })
}

controller.delete = async (req, res) => {
  const id = req.params.id
  const reqPassword = req.query.password

  const targetDoc = await modelBbs.get(id)
  targetDocData = targetDoc.data()
  if (targetDocData.password === reqPassword) {
    await modelBbs.delete(id)
    res.json({isSuccess: true})
  } else {
    res.json({isSuccess: false})
  }
}

controller.commentsCreate = async (req, res) => {
  const id = req.params.id

  const data = {
    author   : req.body.author,
    content  : req.body.content,
    password : req.body.password,
    createdAt: new Date(),
    deletedAt: null,
  }

  const target = (await modelBbs.get(id)).data()
  target.comments.push(data)
  await modelBbs.update(id, { comments: target.comments })

  res.json({isSuccess: true})
}

controller.commentsDelete = async (req, res) => {
  const id = req.params.id
  const cid = req.params.cid
  const password = req.query.password

  const target = (await modelBbs.get(id)).data()
  if (target.comments[cid].password === password) {
    target.comments[cid].deletedAt = new Date()
    await modelBbs.update(id, { comments: target.comments })
    res.json({isSuccess: true})
  } else {
    res.json({isSuccess: false})
  }
}

controller.index = async (req, res) => {
  const id = req.query.id

  let qs
  if (typeof id === 'undefined') {
    qs = await modelBbs.getPage()
  } else {
    qs = await modelBbs.getPage(id)
  }

  let resData = []
  let tmpDocData
  qs.forEach((qs) => {
    tmpDocData = qs.data()
    resData.push({
      id       : qs.id,
      author   : tmpDocData.author,
      title    : tmpDocData.title,
      content  : tmpDocData.content,
      createdAt: util.getDateString(tmpDocData.createdAt.toDate()),
      updatedAt: util.getDateString(tmpDocData.updatedAt.toDate()),
    })
  })

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

module.exports = controller

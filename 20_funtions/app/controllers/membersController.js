const modelMembers = require('../models/members')
const controller = {}

controller.indexGet = (_, res) => {
  modelMembers.getAll((data) => {
    res.json(data)
  })
}

controller.indexPost = (req, res) => {
  const inputData = modelMembers.schema
  inputData.name_family = req.body.name_family || ''
  inputData.name_given = req.body.name_given || ''
  inputData.year = Number(req.body.year) || 1900
  inputData.highschool = req.body.highschool || ''
  inputData.prefecture = req.body.prefecture || ''
  inputData.intro = req.body.intro || ''

  modelMembers.create(inputData, (id) => {
    res.json(id)
  })
}

controller.indexIdGet = (req, res) => {
  const id = req.params.id
  modelMembers.get(id, (data) => {
    res.json(data)
  })
}

controller.indexIdPut = (req, res) => {
  const id = req.params.id
  const inputData = modelMembers.schema
  inputData.name_family = req.body.name_family || ''
  inputData.name_given = req.body.name_given || ''
  inputData.year = Number(req.body.year) || 1900
  inputData.highschool = req.body.highschool || ''
  inputData.prefecture = req.body.prefecture || ''
  inputData.intro = req.body.intro || ''

  modelMembers.update(id, inputData, () => {
    res.json('OK')
  })
}

controller.indexIdDelete = (req, res) => {
  const id = req.params.id
  modelMembers.delete(id, () => {
    res.json('ok')
  })
}

module.exports = controller
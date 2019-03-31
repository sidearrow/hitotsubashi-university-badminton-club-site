const functions = require('firebase-functions')

const functionsConfig = functions.config()
const config = {
  mizutoriPassword: functionsConfig.mizutori.password,
}

module.exports = config

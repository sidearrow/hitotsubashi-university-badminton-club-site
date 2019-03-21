const functions = require('firebase-functions')

const functionsConfig = functions.config()
const config = {
  env: functionsConfig.env.env
}

config.bucketName = functionsConfig.bucket_name.dev
if (config.env === 'prod') {
  config.bucketName = functionConfig.bucket_name.prod
}

module.exports = config

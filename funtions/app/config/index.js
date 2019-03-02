const functions = require('firebase-functions')

const functionsConfig = functions.config()
const config = {
  env: functionsConfig.env.env
}

if (config.env === 'dev') {
  config.bucketName = functionsConfig.bucket_name.dev
} else if (config.env === 'prod') {
  config.bucketName = functionConfig.bucket_name.prod
}

module.exports = config
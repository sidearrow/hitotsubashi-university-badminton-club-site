const config = {}

config.apiBaseUrl =
  (process.env.NODE_ENV === 'production') ?
  '' :
  'https://asia-northeast1-dev-hit-u-bad.cloudfunctions.net/api'

module.exports = config
const config = {}

config.apiBaseUrl =
  (process.env.NODE_ENV === 'production') ?
  '' :
  'http://localhost:5000/dev-hit-u-bad/us-central1/api'

module.exports = config
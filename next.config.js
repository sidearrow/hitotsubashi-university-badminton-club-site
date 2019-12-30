const withSass = require('@zeit/next-sass');
const path = require('path');
const env = require(path.resolve(__dirname, `env.${process.env.NODE_ENV}`));

module.exports = withSass({
  publicRuntimeConfig: {
    env: env,
  },
});

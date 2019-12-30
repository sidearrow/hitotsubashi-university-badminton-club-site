module.exports = {
  siteMetadata: {
    title: `一橋大学バドミントン部`,
    description: `一橋大学バドミントン部のホームページです`,
    author: `@sidearrow`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-csv`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
}

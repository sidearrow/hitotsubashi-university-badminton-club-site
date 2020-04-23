module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '一橋大学バドミントン部',
        start_url: '/',
        background_color: '#ac2926',
        theme_color: '#ac2926',
        icon: 'src/assets/img/logo.svg',
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    `gatsby-transformer-csv`,
  ],
}

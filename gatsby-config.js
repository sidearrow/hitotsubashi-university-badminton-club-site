module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '一橋大学バドミントン部',
        start_url: '/',
        background_color: '#ac2926',
        theme_color: '#ac2926',
        icon: 'src/assets/img/logo.svg',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-transformer-csv',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/markdown`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-csv',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-164925120-1',
        ],
      },
    }
  ],
}

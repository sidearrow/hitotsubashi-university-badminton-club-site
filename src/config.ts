const config = {
  firebase: {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
  },
  googleSiteVerification: process.env.GATSBY_GOOGLE_SITE_VERIFICATION || '',
  mizutoriEmail: process.env.GATSBY_MIZUTORI_EMAIL || '',
  url: {
    twitter: 'https://twitter.com/hit_u_bad',
    instagram: 'https://www.instagram.com/hitotsubashi_badminton/',
    github: 'https://github.com/sidearrow/hit-u-bad',
  },
  siteMetaData: {
    siteName: '一橋大学バドミントン部',
    url: 'https://hit-u-bad.netlify.app',
    twitterId: 'hit_u_bad',
    themeColor: '#ac2926',
  },
};

export default config;

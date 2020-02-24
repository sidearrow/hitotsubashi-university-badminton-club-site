const constant = {
  firebase: {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
  },
  mizutoriEmail: process.env.GATSBY_MIZUTORI_EMAIL || '',
}

export default constant;

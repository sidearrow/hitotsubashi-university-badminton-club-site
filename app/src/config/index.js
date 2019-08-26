export default {
  firebase: {
    apiKey       : process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain   : process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    //databaseURL  : process.env.VUE_APP_FIREBASE_DATABSE_URL,
    projectId    : process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  },
  mizutoriMailAddress: process.env.VUE_APP_MIZUTORI_MAIL_ADDRESS
}

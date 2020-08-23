export const config = {
  baseUrl: 'https://hit-u-badminton.web.app',
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  mizutoriEmail: process.env.NEXT_PUBLIC_MIZUTORI_EMAIL as string,
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
  url: {
    twitter: 'https://twitter.com/hit_u_bad',
    instagram: 'https://www.instagram.com/hitotsubashi_badminton',
    github: 'https://github.com/sidearrow/hit-u-bad',
    bbs: 'http://hitotsubashibad.bbs.fc2.com',
    bbsOld: 'http://bbs.mottoki.com/?bbs=ikkyo_bad',
  },
};

import env from '@/env/env'
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey    : env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  projectId : env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
})

export default firebase;

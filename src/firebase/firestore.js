import env from '@/env/env'
import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey    : env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  projectId : env.firebase.projectId,
})

export default firebase.firestore()

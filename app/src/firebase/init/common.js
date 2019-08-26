import config from '@/config'
import firebase from 'firebase/app'

firebase.initializeApp(config.firebase)

export default firebase

import firebase from 'firebase';
import config from '../config';

firebase.initializeApp(config.firebase);

let _auth, _storage;
if (typeof window !== 'undefined') {
  _auth = firebase.auth();
  _storage = firebase.storage()
}

export const firebaseAuth = _auth;
export const firebaseStorage = _storage;

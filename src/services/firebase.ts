import firebase from 'firebase';
import config from '../config';

firebase.initializeApp(config.firebase);

export const firebaseAuth = firebase.auth();
export const firebaseStorage = firebase.storage();

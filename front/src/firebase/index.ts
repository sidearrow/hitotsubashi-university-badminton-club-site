import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'
import config from '../config';

firebase.initializeApp(config.firebase);

export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const firebaseStorage = firebase.storage();

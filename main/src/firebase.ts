import * as firebase from 'firebase/app';
import 'firebase/auth';
import constant from './constant';

firebase.initializeApp(constant.firebase);

export const firebaseAuth = firebase.auth();

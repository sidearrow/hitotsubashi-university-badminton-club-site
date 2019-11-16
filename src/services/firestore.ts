import * as firebase from 'firebase/app';
import 'firebase/firestore';
import configFirebase from '../config/configFirebase';

firebase.initializeApp(configFirebase);

const firestore = firebase.firestore();

export default firestore;

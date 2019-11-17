import * as functions from 'firebase-functions';
import app from './app';

export default functions.region('asia-northeast1').https.onRequest(app);

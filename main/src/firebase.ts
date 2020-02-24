import * as firebase from 'firebase/app';
import 'firebase/auth';
import constant from './constant';

export default class Firebase {
  private static instance: firebase.app.App;
  private isBrowser = typeof window === 'object'

  public constructor() {
    if (this.isBrowser && !Firebase.instance) {
      Firebase.instance = firebase.initializeApp(constant.firebase);
    }
  }

  public getAuth() {
    return Firebase.instance.auth();
  }
}

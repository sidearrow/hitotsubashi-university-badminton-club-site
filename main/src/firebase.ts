import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import constant from './config';

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

  public async getStorageDownloadUrl(path: string) {
    const storage = Firebase.instance.storage();
    const url: string = await storage.ref(path).getDownloadURL();
    return url;
  }
}

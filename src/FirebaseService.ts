import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import config from './config';

export default class FirebaseService {
  private static app: firebase.app.App | null = null;
  private static auth: firebase.auth.Auth | null = null;
  private static storage: firebase.storage.Storage | null = null;

  public constructor() {
    if (typeof window === 'object' && FirebaseService.app === null) {
      FirebaseService.app = firebase.initializeApp(config.firebase);
      FirebaseService.auth = FirebaseService.app.auth();
      FirebaseService.storage = FirebaseService.app.storage();
    }
  }

  public async login(password: string): Promise<boolean> {
    try {
      await FirebaseService.auth?.signInWithEmailAndPassword(
        config.mizutoriEmail,
        password
      );
    } catch (_) {
      return false;
    }

    return true;
  }

  public isLogin(): Promise<boolean> {
    return new Promise((resolve, _) => {
      try {
        FirebaseService.auth?.onAuthStateChanged(user => {
          resolve(user?.email === config.mizutoriEmail);
        });
      } catch (e) {
        resolve(false);
      }
    });
  }

  public logout() {
    return FirebaseService.auth?.signOut();
  }

  public async getStorageDownloadUrl(path: string): Promise<string | null> {
    try {
      return await FirebaseService.storage?.ref(path).getDownloadURL();
    } catch {
      return null;
    }
  }
}

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import config from './config';

export default class FirebaseService {
  private static App: firebase.app.App | null = null;
  private static Auth: firebase.auth.Auth | null = null;

  public static init() {
    if (typeof window === 'object' && FirebaseService.App === null) {
      FirebaseService.App = firebase.initializeApp(config.firebase);
      FirebaseService.Auth = FirebaseService.App.auth();
    }
  }

  public static async login(password: string): Promise<boolean> {
    try {
      await FirebaseService.Auth?.signInWithEmailAndPassword(
        config.mizutoriEmail, password
      );
    } catch (_) {
      return false;
    }

    return true;
  }

  public static isLogin(): Promise<boolean> {
    return new Promise((resolve, _) => {
      try {
        FirebaseService.Auth?.onAuthStateChanged((user) => {
          resolve(user?.email === config.mizutoriEmail);
        });
      } catch (e) {
        resolve(false);
      }
    });
  }

  public static logout() {
    return FirebaseService.Auth?.signOut();
  }

  public async getStorageDownloadUrl(path: string) {
    const storage = FirebaseService.App?.storage();
    const url: string = await storage?.ref(path).getDownloadURL();
    return url;
  }
}

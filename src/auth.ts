import Firebase from "./firebase"
import constant from "./config";

export default class Auth {
  private firebaseAuth: firebase.auth.Auth;

  public constructor() {
    const firebase = new Firebase();
    this.firebaseAuth = firebase.getAuth();
  }

  public async login(password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(constant.mizutoriEmail, password);
      return true;
    } catch (e) {
      return false;
    }
  }

  public isLogin(): Promise<boolean> {
    return new Promise((resolve, _) => {
      this.firebaseAuth.onAuthStateChanged((user) => {
        resolve(user?.email === constant.mizutoriEmail);
      });
    });
  }

  public logout() {
    this.firebaseAuth.signOut();
  }
}

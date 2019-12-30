import { firebaseAuth } from "./firebase";
import config from "../config";

const mizutoriAuthService = {
  isLogin: (): boolean => {
    return firebaseAuth.currentUser !== null;
  },
  login: (password: string) => {
    return firebaseAuth.signInWithEmailAndPassword(config.mizutoriMailAddress || '', password);
  },
  logout: () => {
    firebaseAuth.signOut();
  }
};

export default mizutoriAuthService;

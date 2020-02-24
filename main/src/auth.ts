import { firebaseAuth } from "./firebase"
import constant from "./constant";

export const mizutoriLogin = async (password: string) => {
  try {
    await firebaseAuth.signInWithEmailAndPassword(constant.mizutoriEmail, password);
    return true;
  } catch (e) {
    return false;
  }
}

export const isMizutoriLogin = (): Promise<boolean> => {
  return new Promise((resolve, _) => {
    firebaseAuth.onAuthStateChanged((user) => {
      resolve(user?.email === constant.mizutoriEmail);
    });
  });
}

export const mizutoriLogout = () => {
  firebaseAuth.signOut();
}

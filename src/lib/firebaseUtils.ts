import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { settings } from '../settings';

if (firebase.apps.length === 0) {
  firebase.initializeApp(settings.firebase);
}
const auth = firebase.auth();
const storage = firebase.storage();

export const firebaseAuthLogin = async (password: string): Promise<void> => {
  await auth.signInWithEmailAndPassword(settings.mizutoriEmail, password);
};

export const firebaseAuthIsLogin = (): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      auth.onAuthStateChanged((user) => {
        resolve(user?.email === settings.mizutoriEmail);
      });
    } catch {
      resolve(false);
    }
  });
};

export const firebaseAuthLogout = async (): Promise<void> => {
  await auth.signOut();
};

export const firebaseStorageGetDownloadUrl = async (
  path: string
): Promise<string | null> => {
  try {
    return await storage.ref(path).getDownloadURL();
  } catch {
    return null;
  }
};

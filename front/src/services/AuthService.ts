import config from '@/config'
import { firebaseAuth } from '@/firebase';

export default {
  login: (password: string) => {
    return firebaseAuth.signInWithEmailAndPassword(config.mizutoriMailAddress, password)
  },
  logout: (): void => {
    firebaseAuth.signOut()
  },
  isLogin: (): boolean => {
    return firebaseAuth.currentUser !== null && firebaseAuth.currentUser.email === config.mizutoriMailAddress;
  }
}

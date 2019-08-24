import env from '@/env/env'
import auth from './init/auth'

export default {
  login: function (password) {
    return auth.signInWithEmailAndPassword(env.mizutoriLoginMailAddress, password)
  },
  logout: function () {
    return auth.signOut()
  },
  isLogin: function () {
    return auth.currentUser === null || auth.currentUser.email === env.mizutoriLoginMailAddress;
  }
}

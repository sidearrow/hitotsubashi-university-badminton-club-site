import config from '@/config'
import auth from './init/auth'

export default {
  login: function (password) {
    return auth.signInWithEmailAndPassword(config.mizutoriMailAddress, password)
  },
  logout: function () {
    return auth.signOut()
  },
  isLogin: function () {
    return auth.currentUser !== null && auth.currentUser.email === config.mizutoriMailAddress;
  }
}

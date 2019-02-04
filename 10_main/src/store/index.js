import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoginManage: false,
  },
  mutations: {
    loginManage: function (state) {
      state.isLoginManage = true
    },
    logoutManage: function (state) {
      state.isLoginManage = false
    }
  }
})
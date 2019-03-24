import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    loadingStart: function (state) {
      state.isLoading = true
    },
    loadingEnd: function (state) {
      state.isLoading = false
    },
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import bbsInputPost from './modules/bbsInputPost'
import bbsInputPasswordModal from './modules/bbsInputPasswordModal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bbsInputPost,
    bbsInputPasswordModal,
  }
})
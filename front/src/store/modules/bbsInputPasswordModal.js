const state = {
  isOpen: false
}

const mutations = {
  open: function () {
    state.isOpen = true
  },
  close: function () {
    state.isOepn = false
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}
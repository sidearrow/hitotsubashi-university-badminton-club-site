const state = {
  mode: 'NEW',
  data: {},
  rootData: {}
}

const getters = {
  isNew: function () {
    return state.mode === 'NEW'
  },
  isEdit: function () {
    return state.mode === 'EDIT'
  },
}

const mutations = {
  setNew: function (state) {
    state.mode = 'NEW'
    state.data = {}
    state.rootData = {}
  },
  setEdit: function (state, postData) {
    state.mode = 'EDIT'
    state.data = postData
    state.rootData = {}
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
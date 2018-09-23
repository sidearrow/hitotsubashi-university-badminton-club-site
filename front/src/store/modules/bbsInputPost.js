const state = {
  mode: 'NEW',
  id: null,
  data: {},
  rootId: null,
  rootData: {}
}

const getters = {
  isNew: function () {
    return state.mode === 'NEW'
  },
  isEdit: function () {
    return state.mode === 'EDIT'
  },
  isReply: function () {
    return state.mode === 'REPLY'
  },
}

const mutations = {
  setNew: function () {
    state.mode = 'NEW'
    state.id = null
    state.data = {}
    state.rootId = null
    state.rootData = {}
  },
  setEdit: function (postId, postData) {
    state.mode = 'EDIT'
    state.id = postId
    state.data = postData
    state.rootId = null
    state.rootData = {}
  },
  setReply: function (rootId, rootData) {
    state.mode = 'REPLY'
    state.id = null
    state.data = {}
    state.rootId = rootId
    state.rootData = rootData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
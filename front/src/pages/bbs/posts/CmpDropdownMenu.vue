<template>
  <div class="dropdown d-inline-block">
    <a class="btn bg-white dropdown-toggle" @click="toggleDropdown"></a>
    <div :class="`dropdown-menu${(isShow) ? ' show' : ''} text-08rem`">
      <a class="dropdown-item" @click="clickReply(postId)">Reply</a>
      <a class="dropdown-item" @click="clickFunc(postId, 'e')">Edit</a>
      <a class="dropdown-item" @click="clickFunc(postId, 'd')">Delete</a>
    </div>
  </div>
</template>

<script>
import xhr from '@/xhr'

export default {
  props: {
    postId: String
  },
  data: function () {
    return {
      isShow: false,
    }
  },
  methods: {
    toggleDropdown: function () {
      this.isShow = !this.isShow
    },
    clickReply: function (id) {
      this.$router.push(`/bbs/input/${id}`)
    },
    clickFunc: function (id, e) {
      const inputPassword = window.prompt('パスワードを入力してください');
      xhr.get(`/api/bbs/post/${id}`, { password: inputPassword }, (res) => {
        if (res.auth) {
          if (e === 'e') {
            this.$store.commit('bbsInputPost/setEdit', res.data)
            this.$router.push('/bbs/input');
          } else {
            xhr.delete(`/api/bbs/post/${id}`, { password: inputPassword })
          }
        } else {
          window.alert('パスワードが間違っています');
        }
      })
    },
  }
}
</script>
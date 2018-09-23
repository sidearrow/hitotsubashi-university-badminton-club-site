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
    clickFunc: function (id, e) {
      const inputPassword = window.prompt('パスワードを入力してください');
      xhr.get(`/api/bbs/posts/${id}/auth`, { password: inputPassword }, (res) => {
        if (res.auth) {
          if (e === 'e') {
            const tmp = res.data
            tmp[password] = inputPassword
            this.$store.commit('bbsInputPost/setEdit', res.id, tmp)
            this.$router.push('/bbs/input');
          } else {
            // delete
            xhr.delete(`/api/bbs/posts/${id}`, { password: inputPassword })
          }
        } else {
          window.alert('パスワードが間違っています');
        }
      })
    },
  }
}
</script>
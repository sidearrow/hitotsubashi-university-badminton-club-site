<template>
  <article>
    <cmp-input-password-modal
      ref="inputPasswordModal"
      @close-modal="inputPasswordModalClose"
      @click-submit="inputPasswordModalClickSubmit"
      @done-auth="setForm"
    />
    <section>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text width-70px">Name</span>
        </div>
        <input
          type="text" class="form-control"
          v-model="post.author"
        >
      </div>
      <div
        v-if="mode !== 'reply'"
        class="input-group mb-2"
      >
        <div class="input-group-prepend">
          <span class="input-group-text width-70px">Title</span>
        </div>
        <input
          type="text" class="form-control"
          v-model="post.title"
        >
      </div>
      <div class="mb-2">
        <textarea
          class="form-control" cols="60" placeholder="Content"
          :rows="(mode === 'reply') ? 5 : 20"
          v-model="post.content"
        ></textarea>
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text width-100px">Password</span>
        </div>
        <input
          type="password" class="form-control"
          v-model="post.password"
        >
      </div>
    </section>
    <div
      class="alert alert-danger mt-2"
      v-if="errMsg.length > 0"
    >
      <div
        v-for="(v, i) in errMsg" :key="i"
      >{{ v }}</div>
    </div>
    <div class="text-center mt-2">
      <button class="btn bg-main text-white" @click="clickSubmit()">投稿</button>
    </div>
    <div class="mt-2">
      <router-link to="/bbs/posts">←戻る</router-link>
    </div>
  </article>
</template>

<script>
import bbsFunction from '@/pages/bbs/bbsFunction'

import CmpInputPasswordModal from '@/pages/bbs/cmp-input-password-modal'

export default {
  mounted: function () {
    if (this.mode === 'edit') {
      this.$refs.inputPasswordModal.open()
    }
  },
  methods: {
    inputPasswordModalClose: function () {
      this.$router.push('/bbs/posts')
    },
    inputPasswordModalClickSubmit: function (inputPassword) {
      this.$http.get(
        '/bbs/post/' + this.postId,
        { params: { password: inputPassword }}
      )
      .then((res) => {
        if (res.data.auth) {
          this.post.author = res.data.author
          this.post.title = res.data.title
          this.post.content = res.data.content
          this.post.opassword = inputPassword
          this.$refs.inputPasswordModal.close()
        } else {
          this.$refs.inputPasswordModal.outputError()
        }
      })
    },
    setForm: function (_, res) {
      this.isOpenInputPasswordModal = false
      this.post.author = res.author
      this.post.title = res.title
      this.post.content = res.content
    },
    clickSubmit: function () {
      const data = new bbsFunction.data([
        this.post.author,
        this.post.title,
        this.post.content,
        this.post.password, 
      ], this.mode)

      if (data.isError) {
        this.errMsg = data.errorMsg
        return
      }

      if (this.mode === 'edit') {
        this.$http.put(
          '/bbs/post/' + this.$route.params.id,
          data.getPutData()
        )
        .then(() => {
          this.$router.push({path: '/bbs/posts'})
        })
      } else {
        this.$http.post(
          '/bbs/post',
          data.getPostData()
        )
        .then(() => {
          this.$router.push({path: '/bbs/posts'})
        })
      }
    }
  },
  data: function () {
    return {
      isOpenInputPasswordModal: false,
      postId: this.$route.params.id,
      mode: this.$route.path.split('/')[2],
      post: {
        id: '',
        author: '',
        title: '',
        content: '',
        password: '',
        opassword: '',
      },
      errMsg: [],
    }
  },
  components: {
    'cmp-input-password-modal': CmpInputPasswordModal,
  }
}
</script>

<style>
.width-70px {
  width: 70px;
}
.width-100px {
  width: 100px;
}
</style>
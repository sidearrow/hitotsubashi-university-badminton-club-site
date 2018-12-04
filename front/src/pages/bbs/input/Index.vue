<template>
<article>
  <cmp-input-author v-model="input.author" ref="inputAuthor"/>
  <cmp-input-title v-model="input.title" ref="inputTitle"/>
  <cmp-input-content v-model="input.content" ref="inputContent"/>
  <cmp-input-password v-model="input.password" ref="inputPassword"/>
  <div class="text-center mt-2">
    <button
      class="btn bg-main text-white"
      @click="clickSubmit()"
    >投稿</button>
  </div>
  <div class="mt-2">
    <router-link 
      :to="(this.mode === 'edit') ? '/bbs/post/' + this.postId : '/bbs/posts'"
    >←戻る</router-link>
  </div>
</article>
</template>

<script>
import cmpEditPassword from './cmp-edit-password'
import cmpInputAuthor from './cmp-input-author'
import cmpInputTitle from './cmp-input-title'
import cmpInputContent from './cmp-input-content'
import cmpInputPassword from './cmp-input-password'

export default {
  mounted: function () {
    if (this.mode === 'edit') {
      this.$refs.passwordModal.open()
    }
  },
  methods: {
    inputPasswordModalClose: function () {
      this.$router.push('/bbs/post/' + this.postId)
    },
    inputPasswordModalClickSubmit: function (inputPassword) {
      this.$http.get(
        '/bbs/post/' + this.postId,
        { params: { password: inputPassword }}
      )
      .then((res) => {
        if (res.data.auth) {
          this.input.author = res.data.author
          this.input.title = res.data.title
          this.input.content = res.data.content
          this.input.opassword = inputPassword
          this.$refs.inputPasswordModal.close()
        } else {
          this.$refs.inputPasswordModal.outputError()
        }
      })
    },
    clickSubmit: function () {
      if (
        this.$refs.inputAuthor.check() |
        this.$refs.inputTitle.check() |
        this.$refs.inputContent.check() |
        this.$refs.inputPassword.check()
      ) {
        return
      }
      return

      const inputData = {
        author  : this.input.author,
        title   : this.input.title,
        content : this.input.content,
        password: this.input.password,
      }

      if (this.mode === 'edit') {
        this.$http.put(
          '/bbs/post/' + this.$route.params.id,
          inputData
        )
        .then(() => {
          this.$router.push({path: '/bbs/posts'})
        })
      } else {
        this.$http.post(
          '/bbs/post',
          inputData
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
      input: {
        author: '',
        title: '',
        content: '',
        password: '',
      },
      post: {
        id: '',
        author: '',
        title: '',
        content: '',
        password: '',
        opassword: '',
      },
    }
  },
  components: {
    'cmp-edit-password': cmpEditPassword,
    'cmp-input-author': cmpInputAuthor,
    'cmp-input-title': cmpInputTitle,
    'cmp-input-content': cmpInputContent,
    'cmp-input-password': cmpInputPassword,
  }
}
</script>
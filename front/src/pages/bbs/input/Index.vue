<template>
  <article>
    <cmp-password-dialog
      ref="inputPasswordModal"
      @close-dialog="inputPasswordModalClose"
      @click-submit="inputPasswordModalClickSubmit"
    />
    <v-text-field
      label="名前"
      :error="isError.author"
      :error-messages="errorMessages.author"
      v-model="input.author"
    ></v-text-field>
    <v-text-field
      label="タイトル"
      :error="isError.title"
      :error-messages="errorMessages.title"
      v-model="input.title"
    ></v-text-field>
    <v-textarea
      label="本文"
      :error="isError.content"
      :error-messages="errorMessages.content"
      v-model="input.content"
    ></v-textarea>
    <v-text-field
      label="パスワード"
      :error="isError.password"
      :error-messages="errorMessages.password"
      v-model="input.password"
    ></v-text-field>
    <div class="text-xs-center mt-2">
      <v-btn
        outline
        color="primary"
        @click="clickSubmit()"
      >投稿</v-btn>
    </div>
    <div class="mt-2">
      <router-link 
        :to="(this.mode === 'edit') ? '/bbs/post/' + this.postId : '/bbs/posts'"
      >←戻る</router-link>
    </div>
  </article>
</template>

<script>
import CmpPasswordDialog from '@/pages/bbs/cmp-password-dialog'

export default {
  mounted: function () {
    if (this.mode === 'edit') {
      this.$refs.inputPasswordModal.open()
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
      for (let key in this.isError) {
        this.isError[key] = false
      }

      let isError = false
      if (this.input.author.trim().length === 0) {
        isError = true
        this.isError.author = true
        this.errorMessages.author = this.errorMessagesList.author1
      } else if (this.input.author.trim().length > 50) {
        isError = true
        this.isError.author = true
        this.errorMessages.author = this.errorMessagesList.author2
      }
      if (this.input.title.trim().length === 0) {
        isError = true
        this.isError.title = true
        this.errorMessages.title = this.errorMessagesList.title1
      } else if (this.title.author.trim().length > 100) {
        isError = true
        this.isError.title = true
        this.errorMessages.title = this.errorMessagesList.title2
      }
      if (this.input.content.trim().length === 0) {
        isError = true
        this.isError.content = true
        this.errorMessages.content = this.errorMessagesList.content1
      } else if (this.input.content.trim().length > 3000) {
        isError = true
        this.isError.content = true
        this.errorMessages.content = this.errorMessagesList.content2
      }
      if (this.input.password.trim().length === 0) {
        isError = true
        this.isError.password = true
        this.errorMessages.password = this.errorMessagesList.password1
      } else if (!this.input.password.match(/\d\d\d\d/)) {
        isError = true
        this.isError.password = true
        this.errorMessages.password = this.errorMessagesList.password2
      }

      if (isError) {
        return
      }

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
      isError: {
        author: false,
        title: false,
        content: false,
        password: false,
      },
      errorMessages: {
        author: [],
        title: [],
        content: [],
        password: [],
      },
      errorMessagesList: {
        author1: '`名前` を入力してください',
        author2: '`名前` は 50 字で入力してください',
        title1: '`タイトル` を入力してください',
        title2: '`タイトル` は 100 字で入力してください',
        content1: '`コメント` を入力してください',
        content2: '`コメント` は 3000 字以内で入力してください',
        password1: '`パスワード` を入力してください',
        password2: '`パスワード` は半角数字 4 字で入力してください',
      },
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
      errMsg: [],
    }
  },
  components: {
    'cmp-password-dialog': CmpPasswordDialog,
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
<template>
  <div class="mt-5">
    <p class="title">コメントを投稿する</p>
    <v-text-field
      label="名前"
      :error="isError.author"
      :error-messages="errorMessages.author"
      v-model="input.author"
    ></v-text-field>
    <v-textarea
      label="コメント"
      :error="isError.content"
      :error-messages="errorMessages.content"
      v-model="input.content"
    ></v-textarea>
    <v-text-field
      label="パスワード"
      type="password"
      :error="isError.password"
      :error-messages="errorMessages.password"
      v-model="input.password"
    ></v-text-field>
    <div class="text-xs-center mt-2">
      <v-btn
        outline
        color="primary"
        @click="clickPost"
      >投稿</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickPost: function () {
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

      this.$http
        .post(
          `/bbs/post/${this.$route.params.id}/comment`,
          {
            author:   this.input.author,
            content:  this.input.content,
            password: this.input.password
          }
        )
        .then(() => {
          this.input.author = ''
          this.input.content = ''
          this.input.password = ''
          this.$emit('done-post')
        })
    }
  },
  data: function () {
    return {
      isError: {
        author: false,
        content: false,
        password: false,
      },
      errorMessages: {
        author: [],
        content: [],
        password: [],
      },
      errorMessagesList: {
        author1: '`名前` を入力してください',
        author2: '`名前` は 50 字で入力してください',
        content1: '`コメント` を入力してください',
        content2: '`コメント` は 3000 字以内で入力してください',
        password1: '`パスワード` を入力してください',
        password2: '`パスワード` は半角数字 4 字で入力してください',
      },
      input: {
        author: '',
        content: '',
        password: '',
      }
    }
  }
}
</script>
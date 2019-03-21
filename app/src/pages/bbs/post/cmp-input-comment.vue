<template>
<div>
  <!-- 名前 -->
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">名前</label>
    <div class="col-sm-10">
      <input
        maxlength="100"
        :class="'form-control form-control-sm' + (input.author.isError ? ' is-invalid' : '')"
        v-model="input.author.value"
      >
      <div class="invalid-feedback">{{ input.author.errorMsg }}</div>
    </div>
  </div>

  <!-- 削除キー -->
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">削除キー</label>
    <div class="col-sm-10">
      <input
        type="password" maxlength="4"
        :class="'form-control form-control-sm' + (input.password.isError ? ' is-invalid' : '')"
        v-model="input.password.value"
      >
      <div class="invalid-feedback">{{ input.password.errorMsg }}</div>
      <small :class="'form-text text-muted' + (input.password.isError ? ' d-none' : '')" >半角数字 4 桁で入力してください</small>
    </div>
  </div>

  <!-- 本文 -->
  <div class="form-group">
    <textarea
      :class="'form-control form-control-sm' + (input.content.isError ? ' is-invalid' : '')"
      rows="3" maxlength="1000"
      v-model="input.content.value"
      placeholder="コメントを入力してください"
    ></textarea>
    <div class="invalid-feedback">{{ input.content.errorMsg }}</div>
  </div>

  <div class="text-center mt-2">
    <button class="btn btn-outline-primary px-4"
            @click="clickPost()">投稿</button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    clickPost: async function () {
      this.validateAuthor()
      this.validateContent()
      this.validatePassword()
      if (this.input.author.isError || this.input.content.isError || this.input.password.isError) {
        return
      }

      const param = {
        author  : this.input.author.value,
        content : this.input.content.value,
        password: this.input.password.value
      }
      this.$http.post(`/bbs/posts/${this.$route.params.id}/comments`, param)
      this.input.author.value = ''
      this.input.content.value = ''
      this.input.password.value = ''
      this.$emit('done-post')
    },
    validateAuthor: function () {
      const val = this.input.author.value.trim()
      if (val.length === 0) {
        this.input.author.isError = true
        this.input.author.errorMsg = '名前を入力してください'
      } else if (val.length > 100) {
        this.input.author.isError = true
        this.input.author.errorMsg = '名前は 100 字以内で入力してください'
      } else {
        this.input.author.isError = false
      }
    },
    validateContent: function () {
      const val = this.input.content.value.trim()
      if (val.length === 0) {
        this.input.content.isError = true
        this.input.content.errorMsg = 'コメントを入力してください'
      } else if (val.length > 1000) {
        this.input.content.isError = true
        this.input.content.errorMsg = 'コメントは 1000 字以内で入力してください'
      } else {
        this.input.author.isError = false
      }
    },
    validatePassword: function () {
      if (!this.input.password.value.match(/\d\d\d\d/)) {
        this.input.password.isError = true
        this.input.password.errorMsg = '削除キーは半角数字 4 字で入力してください'
      } else {
        this.input.author.isError = false
      }
    },
  },
  data: function () {
    return {
      input: {
        author: {
          value: '',
          errorMsg: '',
          isError: false,
        },
        content: {
          value: '',
          errorMsg: '',
          isError: false,
        },
        password: {
          value: '',
          errorMsg: '',
          isError: false,
        },
      },
    }
  },
}
</script>

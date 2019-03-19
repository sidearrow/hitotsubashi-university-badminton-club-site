<template>
<div>
  <div class="form-group">
    <label>タイトル</label>
    <input :class="'form-control form-control' + (title.isError ? ' is-invalid' : '')"
           v-model="title.value"
           maxlength="50"
    >
    <div class="invalid-feedback">{{ title.errorMsg }}</div>
  </div>
  <div class="form-group">
    <label>名前</label>
    <input :class="'form-control form-control' + (author.isError ? ' is-invalid' : '')"
           v-model="author.value"
           maxlength="50"
    >
    <div class="invalid-feedback">{{ author.errorMsg }}</div>
  </div>
  <div class="form-group">
    <label>本文</label>
    <textarea :class="'form-control form-control' + (content.isError ? ' is-invalid' : '')"
              rows="10" maxlength="2000"
              v-model="content.value"
    ></textarea>
    <div class="invalid-feedback">{{ content.errorMsg }}</div>
  </div>
  <div class="form-group">
    <label>パスワード</label>
    <input type="password" maxlength="4"
           :class="'form-control form-control' + (password.isError ? ' is-invalid' : '')"
           v-model="password.value"
    >
    <div class="invalid-feedback">{{ password.errorMsg }}</div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    setTitle: function(val) {
      this.title.value = val
    },
    setAuthor: function(val) {
      this.author.value = val
    },
    setContent: function(val) {
      this.content.value = val
    },
    getTitle: function() {
      return this.title.value
    },
    getAuthor: function() {
      return this.author.value
    },
    getContent: function() {
      return this.content.value
    },
    getPassword: function() {
      return this.password.value
    },
    validate: function() {
      this.title.isError = ((this.title.errorMsg = validationTitle(this.title.value)) !== '')
      this.author.isError = ((this.author.errorMsg = validationAuthor(this.author.value)) !== '')
      this.content.isError = ((this.content.errorMsg = validationContent(this.content.value)) !== '')
      this.password.isError = ((this.password.errorMsg = validationPassword(this.password.value)) !== '')
      return !this.title.isError && !this.author.isError && !this.content.isError && !this.password.isError
    }
  },
  data: function () {
    return {
      title: {
        value: '',
        isError: false,
        errorMsg: '',
      },
      author: {
        value: '',
        isError: false,
        errorMsg: '',
      },
      content: {
        value: '',
        isError: false,
        errorMsg: '',
      },
      password: {
        value: '',
        isError: false,
        errorMsg: '',
      },
    }
  }
}

const validationTitle = (val) => {
  if (val.length === 0) {
    return 'タイトル を入力してください'
  }
  if (val.length > 50) {
    return 'タイトル は 50 字以内で入力してください'
  }
  return ''
}

const validationAuthor = (val) => {
  if (val.length === 0) {
    return '名前 を入力してください'
  }
  if (val.length > 50) {
    return '名前 は 50 字以内で入力してください'
  }
  return ''
}

const validationContent = (val) => {
  if (val.length === 0) {
    return '本文 を入力してください'
  } else if (val.length > 2000) {
    return '本文 は 2000 字以内入力してください'
  }
  return ''
}

const validationPassword = (val) => {
  if (val.match(/\d\d\d\d/)) {
    return ''
  }
  return 'パスワード は半角数字 4 字で入力してください'
}
</script>

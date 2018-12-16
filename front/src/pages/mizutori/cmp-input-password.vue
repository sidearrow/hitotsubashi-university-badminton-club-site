<template>
<div class="col-sm-8 offset-sm-2 mt-5">
  <div class="form-group">
    <label>パスワード</label>
    <input
      type="password"
      :class="'form-control' + (isError ? ' is-invalid' : '')"
      v-model="inputPassword"
    />
    <small class="form-text text-muted">{{ hintText }}</small>
    <div class="invalid-feedback">{{ msgError }}</div>
  </div>
  <div class="text-center">
    <button
      class="btn btn-primary"
      @click="clickLogin()"
    >ログイン</button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    clickLogin: function () {
      this.$http
        .get(
          '/mizutori',
          {params: {password: this.inputPassword}}
        )
        .then((res) => {
          if (!res.data.auth) {
            this.isError = true
            return
          }
          this.isError = false
          window.sessionStorage.setItem('isLogin', 'true')
          this.$emit('login')
        })
    }
  },
  data: function () {
    return {
      isError: false,
      hintText: '現会長の名前をローマ字表記・英小文字のみで入力してください',
      msgError: 'パスワードが間違っています',
      inputPassword: '',
    }
  }
}
</script>
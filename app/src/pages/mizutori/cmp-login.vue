<template>
<div>
  <div>みずとり会のページです。<br/>コンテンツを見るにはログインしてください。</div>
  <div class="col-sm-8 offset-sm-2 mt-5">
    <div class="form-group">
      <label>パスワード</label>
      <input type="password"
             :class="'form-control' + (isError ? ' is-invalid' : '')"
             v-model="inputPassword"
      />
      <small class="form-text text-muted">現会長の名前をローマ字表記・英小文字のみで入力してください</small>
      <div class="invalid-feedback">パスワードが間違っています</div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-primary px-4"
              @click="clickLogin()">
        <span v-if="isNowLoading"
              class="spinner-border spinner-border-sm mr-2"></span>
        <span>ログイン</span>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    clickLogin: async function () {
      const res = await this.$http.get(`/mizutori/login?password=${this.inputPassword}`)
      if (res.data.login) {
        this.$emit('done-login')
      } else {
        this.isError = true
      }
    },
  },
  data: function () {
    return {
      isError: false,
      isNowLoading: false,
      inputPassword: '',
    }
  }
}
</script>

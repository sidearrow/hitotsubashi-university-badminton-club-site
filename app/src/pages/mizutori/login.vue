<template>
<div>
  <cmp-page-title title="みずとり会" />
  <div>みずとり会のページです。<br/>コンテンツを見るにはログインしてください。</div>

  <div class="col-sm-8 offset-sm-2 mt-5">
    <div class="form-group">
      <label>パスワード</label>
      <input
        type="password"
        :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
        v-model="inputPassword"
      />
      <small class="form-text text-muted">{{ hintText }}</small>
      <div class="invalid-feedback">{{ msgError }}</div>
    </div>
    <div class="text-center">
      <button
        class="btn btn-sm btn-outline-primary"
        @click="clickLogin()"
      >
        <span
          v-if="isNowLoading"
          class="spinner-border spinner-border-sm mr-2"
        ></span>
        <span>ログイン</span>
      </button>
    </div>
  </div>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'

export default {
  methods: {
    clickLogin: function () {
      this.isNowLoading = true
      this.$http
        .get(
          '/mizutori',
          { params: { password: this.inputPassword } }
        )
        .then((res) => {
          this.isNowLoading = false
          if (!res.data.auth) {
            this.isError = true
            return
          }
          this.isError = false
          window.sessionStorage.setItem('mizutori-login-token', 'true')
          this.$router.push('/mizutori')
        })
    }
  },
  data: function () {
    return {
      isError: false,
      isNowLoading: false,
      hintText: '現会長の名前をローマ字表記・英小文字のみで入力してください',
      msgError: 'パスワードが間違っています',
      inputPassword: '',
    }
  },
  components: {
    'cmp-page-title': cmpPageTitle
  }
}
</script>
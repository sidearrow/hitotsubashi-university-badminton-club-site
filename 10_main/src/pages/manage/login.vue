<template>
<div>
  <h2 ass="h2">管理者画面ログイン</h2>
  <div class="col-sm-8 offset-sm-2 mt-5">
    <div class="form-group">
      <label>パスワード</label>
      <input type="password" v-model="inputPassword"
             :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
      />
      <div class="invalid-feedback">{{ msgError }}</div>
    </div>
    <div class="text-center">
      <button class="btn btn-sm btn-outline-primary"
              @click="clickLogin()"
      >
        <span v-if="isNowLoading"
              class="spinner-border spinner-border-sm mr-2"
        ></span>
        <span>ログイン</span>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    clickLogin: function () {
      if (this.inputPassword === 'password') {
        this.$store.commit('loginManage')
        window.sessionStorage.setItem('auth-manage-token', 'true')
        this.$router.push('/manage')
        return
      }
      this.isError = true
      this.msgError = 'パスワードが間違っています'
    }
  },
  data: function () {
    return {
      isError: false,
      msgError: '',
      inputPassword: '',
      isNowLoading: false,
    }
  }
}
</script>
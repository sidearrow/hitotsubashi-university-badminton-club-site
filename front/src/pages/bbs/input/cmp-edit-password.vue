<template>
<div class="mb-5">
  <p>この投稿のパスワードを入力してください</p>
  <div class="input-group">
    <input
      type="password"
      :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
      v-model="inputPassword"
      :disabled="isDisable"
    />
    <div class="input-group-append">
      <button
        @click="click"
        class="btn btn-sm bg-main text-white"
        :disabled="isDisable"
      >確認</button>
    </div>
    <div class="invalid-feedback">{{ errMsg }}</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['id', 'isDisable'],
  methods: {
    click: function () {
      this.$http.get(
        '/bbs/post/' + this.id,
        { params: { password: this.inputPassword }}
      ).then((res) => {
        if (res.data.auth) {
          this.isError = false
          this.$emit('doneAuth', this.inputPassword)
        } else {
          this.isError = true
          this.errMsg = "パスワードが間違っています"
        }
      })
    }
  },
  data: function () {
    return {
      inputPassword: "",
      isError: false,
      errMsg: ""
    }
  }
}
</script>
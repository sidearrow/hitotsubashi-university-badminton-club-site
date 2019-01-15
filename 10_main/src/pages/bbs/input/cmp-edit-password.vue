<template>
<div class="my-5 col-sm-8 offset-sm-2">
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
        class="btn btn-sm btn-primary"
        :disabled="isDisable"
      >確認</button>
    </div>
    <div class="invalid-feedback">{{ errMsg }}</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['id', 'isEdit', 'isDelete', 'isDisable'],
  methods: {
    click: function () {
      if (this.isEdit) {
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
      } else if (this.isDelete) {
        this.$http
          .delete(
            '/bbs/post/' + this.postId,
            { params: {password: this.inputPassword} }
          )
          .then((res) => {
            if (res.data.isSuccess) {
              this.isError = false
              this.$emit('doneDelete')
            } else {
              this.isError = true
              this.errMsg = "パスワードが間違っています"
            }
          })
      } 
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
<template>
  <div>
    <div
      :class="`modal ${(isOpen ? 'd-block' : 'd-none')}`"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">パスワードを入力してください</h5>
            <button
              class="close"
              @click="close"
            ><span>&times;</span></button>
          </div>
          <div class="modal-body">
            <div
              v-if="isError"
              class="alert alert-danger"
            >パスワードが間違っています</div>
            <input
              type="password" class="form-control" placeholder="Enter password ..."
              v-model="inputPassword"
            >
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              @click="close"
            >Cancel</button>
            <button
              type="button" class="btn btn-primary"
              @click="clickSubmit"
            >OK</button>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="`modal-backdrop fade ${isOpen ? 'show d-block' : 'd-none'}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    cid: Number,
    isDelete: Boolean
  },
  methods: {
    open: function () {
      this.isOpen = true
    },
    close: function () {
      this.isOpen = false
    },
    clickSubmit: function () {
      if (this.isDelete) {
        const url = '/bbs/post/' + this.id + (this.cid === -1 ? '' : '/comment/' + this.cid)

        this.$http
          .delete(url, { params: { password: this.inputPassword }})
          .then((res) => {
            this.isError = !res.data.isSuccess
            if (!this.isError) {
              this.$emit('done')
            }
          })
      } else {
        this.$http.get(
          '/bbs/post/' + this.id,
          { params: { password: this.inputPassword }}
        )
        .then((res) => {
          this.isError = !res.data.auth
          if (!this.isError) {
            this.$emit('done', this.inputPassword, res)
          }
        })
      }
    }
  },
  data: function () {
    return {
      isOpen: false,
      isError: false,
      inputPassword: '',
    }
  },
  watch: {
    'isOpen': function () {
      if (this.isOpen) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
}
</script>
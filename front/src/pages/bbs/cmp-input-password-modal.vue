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
  </div>
</template>

<script>
export default {
  methods: {
    open: function () {
      this.isOpen = true
    },
    close: function () {
      this.isOpen = false
      this.isError = false
      this.inputPassword = ''
    },
    outputError: function () {
      this.isError = true
    },
    clickSubmit: function () {
      this.$emit('click-submit', this.inputPassword)
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
<template>
<div
  :class="'modal' + (isOpen ? ' fade show d-block' : '')"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title">パスワードを入力して下さい</p>
        <button
          class="close"
          @click="close"
        >
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <input
            type="password" class="form-control"
            :v-model="inputPassword"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button
          class="btn bg-main text-white"
          @click="clickSubmit"
        >OK</button>
        <button
          class="btn btn-secondary"
          @click="close"
        >キャンセル</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  created: function () {
    this.elModalBackdrop = document.createElement('div')
    this.elModalBackdrop.classList.add('modal-backdrop', 'fade', 'show', 'd-none')
    document.body.appendChild(this.elModalBackdrop)
  },
  methods: {
    open: function () {
      this.elModalBackdrop.classList.remove('d-none')
      this.isOpen = true
    },
    close: function () {
      this.elModalBackdrop.classList.add('d-none')
      this.isOpen = false
      this.isError = false
      this.inputPassword = ''
      this.$emit('close-dialog')
    },
    outputError: function () {
      this.isError = true
      this.errorMessages = 'パスワードが間違っています'
    },
    clickSubmit: function () {
      this.$emit('click-submit', this.inputPassword)
    }
  },
  data: function () {
    return {
      isOpen: false,
      isError: false,
      elModalBackdrop: {},
      errorMessages: [],
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
  },
}
</script>
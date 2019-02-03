<template>
<div
  :class="'modal' + (isOpen ? ' fade show d-block' : '')"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">投稿を削除します</h5>
        <button
          class="close"
          @click="close"
        >
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>削除キー</label>
          <input
            type="password" maxlength="4"
            :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
            v-model="inputPassword"
          />
          <div class="invalid-feedback">{{ errorMsg }}</div>
          <small :class="'form-text text-muted' + (isError ? ' d-none' : '')">半角数字 4 桁で入力してください</small>
        </div>
      </div>
      <div class="modal-footer">
        <button
          class="btn btn-sm btn-outline-danger"
          @click="clickSubmit"
        >削除</button>
        <button
          class="btn btn-sm btn-outline-secondary"
          @click="close"
        >キャンセル</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['postId', 'commentId'],
  created: function () {
    this.elModalBackdrop = document.createElement('div')
    this.elModalBackdrop.classList.add('modal-backdrop', 'fade', 'show', 'd-none')
    document.body.appendChild(this.elModalBackdrop)
  },
  destroyed: function () {
    this.elModalBackdrop.parentNode.removeChild(this.elModalBackdrop)
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
    clickSubmit: async function () {
      let url = '/bbs/post/' + this.postId
      if (this.commentId !== null) {
        url += '/comment/' + this.commentId
      }

      const res = await this.$http.delete(url, { params: { password: this.inputPassword }})
      if (!res.data.isSuccess) {
        this.isError = true
        this.errorMsg = 'パスワードが間違っています'
        return
      }

      this.close()
      if (this.commentId === null) {
        alert('投稿を削除しました')
        this.$router.push('/bbs/posts')
      } else {
        alert('コメントを削除しました')
        this.$emit('comment-delete-done')
      }
    }
  },
  data: function () {
    return {
      isOpen: false,
      isError: false,
      elModalBackdrop: {},
      errorMsg: '',
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
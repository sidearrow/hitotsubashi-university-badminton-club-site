<template>
  <div>
    <div class="modal" id="slf-modal">
      <div class="modal-dialog" role="document">
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
              @click="fetchPostData"
            >OK</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" id="slf-modal-back"></div>
  </div>
</template>

<script>
import xhr from '@/xhr'

export default {
  mounted: function () {
    document.getElementById('slf-modal-back').style.display = 'none'
  },
  props: {
    isOpen: Boolean,
    id: String
  },
  methods: {
    close: function () {
      this.$emit('close-modal')
    },
    fetchPostData: function () {
      xhr.get(`/api/bbs/post/${this.id}`, {password: this.inputPassword}, (res) => {
        console.log(res)
        this.isError = !res.auth
        if (res.auth) {
          this.$emit('done-auth', this.inputPassword, res)
        }
      })
    }
  },
  data: function () {
    return {
      isError: false,
      inputPassword: '',
    }
  },
  watch: {
    'isOpen': function () {
      if (this.isOpen) {
        document.body.classList.add('modal-open')
        document.getElementById('slf-modal').style.display = 'block'
        document.getElementById('slf-modal-back').classList.add('show')
        document.getElementById('slf-modal-back').style.display = 'block'
      } else {
        document.body.classList.remove('modal-open')
        document.getElementById('slf-modal').style.display = 'none'
        document.getElementById('slf-modal-back').classList.remove('show')
        document.getElementById('slf-modal-back').style.display = 'none'
      }
    }
  }
}
</script>
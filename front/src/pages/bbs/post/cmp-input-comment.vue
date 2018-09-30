<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">comment</h5>
        <div class="mb-2">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Name</span>
            </div>
            <input
              type="text"
              :class="`form-control${(isError.author1 || isError.author2) ? ' is-invalid' : ''}`"
              v-model="input.author"
            >
            <div 
              :class="`invalid-feedback${isError.author1 ? '' : ' d-none'}`"
            >`Name` を入力してください</div>
            <div
              :class="`invalid-feedback${isError.author2 ? '' : ' d-none'}`"
            >`Name` は50字以内で入力してください</div>
          </div>
        </div>

        <div class="mb-2">
          <textarea
          　:class="`form-control form-control-sm${(isError.content1 || isError.content2) ? ' is-invalid' : ''}`" rows="3"
            v-model="input.content"
          ></textarea>
          <div
            :class="`invalid-feedback${isError.password1 ? '' : ' d-none'}`"
          >`本文` を入力してください</div>
          <div
            :class="`invalid-feedback${isError.password2 ? '': ' d-none'}`"
          >`本文` は3000字以内で入力してください</div>
        </div>

        <div>
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Password</span>
            </div>
            <input
              type="password"
              :class="`form-control${(isError.password1 || isError.password2) ? ' is-invalid' : ''}`"
              v-model="input.password"
            >
            <div
              :class="`invalid-feedback${isError.password1 ? '' : ' d-none'}`"
            >`Password` を入力してください</div>
            <div
              :class="`invalid-feedback${isError.password2 ? '': ' d-none'}`"
            >`Password` は半角数字４字で入力してください</div>
          </div>
          <small
            :class="`form-text text-muted${(isError.password1 || isError.password2) ? ' d-none' : ''}`"
          >半角数字4文字で入力してください</small>
        </div>
        <div class="text-center mt-2">
          <button
            class="btn btn-sm bg-main text-white"
            @click="clickPost"
          >POST</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickPost: function () {
      for (let key in this.isError) {
        this.isError[key] = false
      }

      let isError = false
      if (this.input.author.trim().length === 0) {
        isError = true
        this.isError.author1 = true
      } else if (this.input.author.trim().length > 50) {
        isError = true
        this.isError.author2 = true
      }
      if (this.input.content.trim().length === 0) {
        isError = true
        this.isError.content1 = true
      } else if (this.input.content.trim().length > 3000) {
        isError = true
        this.isError.content2 = true
      }
      if (this.input.password.trim().length === 0) {
        isError = true
        this.isError.password1 = true
      } else if (!this.input.password.match(/\d\d\d\d/)) {
        isError = true
        this.isError.password2 = true
      }

      if (!isError) {
        this.$http
          .post(
            `${this.$config.apiUrlBase}/bbs/post/${this.$route.params.id}/comment`,
            {
              author:   this.input.author,
              content:  this.input.content,
              password: this.input.password
            }
          )
          .then(() => {
            this.$emit('done-post')
          })
      }
    }
  },
  data: function () {
    return {
      isError: {
        author1: false,
        author2: false,
        content1: false,
        content2: false,
        password1: false,
        password2: false,
      },
      input: {
        author: '',
        content: '',
        password: '',
      }
    }
  }
}
</script>
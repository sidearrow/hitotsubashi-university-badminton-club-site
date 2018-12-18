<template>
  <div class="mt-5">
    <h3>コメントを投稿する</h3>
    <cmp-input-comment-author v-model="input.author" ref="inputAuthor"/>
    <cmp-input-comment-content v-model="input.content" ref="inputContent"/>
    <cmp-input-comment-password v-model="input.password" ref="inputPassowrd"/>
    <div class="text-center mt-2">
      <button
        class="btn bg-main text-white"
        @click="clickPost"
      >投稿</button>
    </div>
  </div>
</template>

<script>
import cmpInputCommentAuthor from './cmp-input-comment-author'
import cmpInputCommentContent from './cmp-input-comment-content'
import cmpInputCommentPassword from './cmp-input-comment-password'

export default {
  methods: {
    clickPost: function () {
      if (
        this.$refs.inputAuthor.check() |
        this.$refs.inputContent.check() |
        this.$refs.inputPassowrd.check()
      ) {
        return
      }
      this.$http
        .post(
          `/bbs/post/${this.$route.params.id}/comment`,
          {
            author:   this.input.author,
            content:  this.input.content,
            password: this.input.password
          }
        )
        .then(() => {
          this.input.author = ''
          this.input.content = ''
          this.input.password = ''
          this.$emit('done-post')
        })
    }
  },
  data: function () {
    return {
      input: {
        author: '',
        content: '',
        password: '',
      }
    }
  },
  components: {
    'cmp-input-comment-author': cmpInputCommentAuthor,
    'cmp-input-comment-content': cmpInputCommentContent,
    'cmp-input-comment-password': cmpInputCommentPassword,
  }
}
</script>
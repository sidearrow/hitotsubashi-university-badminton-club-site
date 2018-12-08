<template>
  <div>
    <cmp-done
      v-if="isDone"
    />
    <div
      v-else
    >
      <p>こちらの投稿を削除します</p>
      <v-text-field
        label="パスワード"
        type="password"
        v-model="inputPassword"
        :error="isError"
        :error-messages="errorMessages"
      ></v-text-field>
      <div class="text-xs-right mb-3">
        <button
          class="btn bg-main text-white"
          color="info"
          @click="clickOK"
        >OK</button>
        <button
          class="btn btn-secondary ml-2"
          @click="$router.push('/bbs/post/' + postId)"
        >CANCEL</button>
      </div>
      <div>
        <div>{{ post.title }}</div>
        <div>{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import cmpDone from './done'

export default {
  created: function () {
    this.$http
      .get('/bbs/post/' + this.postId)
      .then((res) => {
        this.post = res.data
      })
  },
  methods: {
    clickOK: function () {
      this.$http
        .delete(
          '/bbs/post/' + this.postId,
          { params: {password: this.inputPassword} }
        )
        .then((res) => {
          this.isError = !res.data.isSuccess
          if (this.isError) {
            this.errorMessages.push('パスワードが間違っています')
          } else {
            this.isDone = true
          }
        })
    }
  },
  data: function () {
    return {
      post: {},
      postId: this.$route.params.id,
      inputPassword: '',
      isError: false,
      errorMessages: [],
      isDone: false,
    }
  },
  components: {
    'cmp-done': cmpDone
  }
}
</script>
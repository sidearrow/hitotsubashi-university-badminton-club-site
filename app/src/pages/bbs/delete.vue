<template>
<div>
  <cmp-page-title title="掲示板 投稿削除" />

  <div v-show="status.isAuth">
    <div class="col-sm-8 offset-sm-2 my-3">
      <div class="form-group">
        <label>削除キー</label>
        <input
          type="password"
          :class="'form-control form-control-sm' + (authError ? ' is-invalid' : '')"
          v-model="inputPassword"
        />
        <small class="form-text text-muted">半角数字 4 字で入力してください</small>
        <div class="invalid-feedback">削除キーが間違っています</div>
      </div>
      <div class="text-center">
        <button class="btn btn-outline-primary px-4"
                @click="clickDelete()">削除</button>
        <router-link class="btn btn-outline-secondary px-4 ml-2"
                     :to="'/bbs/posts/' + postId">戻る</router-link>
      </div>
    </div>
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2 font-weight-bold">タイトル</div>
      <div class="col-12 col-sm-8 py-2">{{ post.title }}</div>
    </div>
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2 font-weight-bold">名前</div>
      <div class="col-12 col-sm-8 py-2">{{ post.author }}</div>
    </div>
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2 font-weight-bold">本文</div>
      <div class="col-12 col-sm-8 py-2" style="white-space:pre-line">{{ post.content }}</div>
    </div>
  </div>

  <div v-show="status.isDone">
    <div class="alert alert-primary">削除が完了しました。</div>
    <div class="text-center">
      <router-link class="btn btn-outline-primary px-4"
                   to="/bbs/posts">戻る</router-link>
    </div>
  </div>

</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'

const _components = {
  'cmp-page-title': cmpPageTitle
}

export default {
  components: _components,
  created: async function () {
    const res = await this.$http.get(`/bbs/posts/${this.postId}`)
    this.post.title = res.data.title
    this.post.author = res.data.author
    this.post.content = res.data.content
  },
  methods: {
    clickDelete: async function () {
      const res = await this.$http.delete(`/bbs/posts/${this.postId}?password=${this.inputPassword}`)
      if (res.data.isSuccess) {
        this.status.isAuth = false
        this.status.isDone = true
      } else {
        this.authError = true
      }
    },
  },
  data: function () {
    return {
      postId: this.$route.params.id,
      status: {
        isAuth: true,
        isDone: false,
      },
      post: {
        title: '',
        author: '',
        content: '',
      },
      inputPassword: '',
      authError: false,
    }
  },
}
</script>

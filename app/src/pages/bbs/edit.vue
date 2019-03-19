<template>
<div>
  <cmp-page-title title="掲示板 投稿編集" />

  <div v-show="!auth">
    <div class="col-sm-8 offset-sm-2 my-3">
      <div class="form-group">
        <label>編集キー</label>
        <input
          type="password"
          :class="'form-control form-control-sm' + (authError ? ' is-invalid' : '')"
          v-model="inputPassword"
        />
        <small class="form-text text-muted">半角数字 4 字で入力してください</small>
        <div class="invalid-feedback">編集キーが間違っています</div>
      </div>
      <div class="text-center">
        <button class="btn btn-outline-primary px-4"
                @click="clickAuth()">編集</button>
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

  <cmp-base
    v-show="auth"
    :backTo="'/bbs/posts/' + postId"
    :title="post.title"
    :author="post.author"
    :content="post.content"
  />
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import cmpBase from './cmp-base'

export default {
  created: function () {
    this.$http.get('/bbs/posts/' + this.postId).then((res) => {
      this.post = res.data
    })
  },
  data: function () {
    return {
      auth: false,
      authError: false,
      post: {},
      postId: this.$route.params.id,
      inputPassword: '',
    }
  },
  components: {
    'cmp-base': cmpBase,
    'cmp-page-title': cmpPageTitle,
  },
  methods: {
    clickAuth: function () {
      this.auth = true
    }
  },
}
</script>

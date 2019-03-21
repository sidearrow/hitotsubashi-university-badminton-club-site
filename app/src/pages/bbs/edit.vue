<template>
<div>
  <cmp-page-title title="掲示板 投稿編集" />

  <div v-show="status.isAuth">
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

  <div v-show="status.isInput">
    <cmp-form ref="form" />
    <div class="text-center mt-5">
      <button class="btn btn-outline-primary px-4"
              @click="clickInputConfirm()">確認</button>
      <button class="btn btn-outline-secondary ml-2 px-4"
              @click="clickInputCancel()">キャンセル</button>
    </div>
  </div>

  <div v-show="status.isConfirm">
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
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2 font-weight-bold">編集 / 削除 キー</div>
      <div class="col-12 col-sm-8 py-2">{{ post.password }}</div>
    </div>
    <div class="text-center mt-5">
      <button class="btn btn-outline-primary px-4"
              @click="clickConfirmSubmit()">投稿</button>
      <button class="btn btn-outline-secondary ml-2 px-4"
              @click="clickConfirmEdit()">編集に戻る</button>
    </div>
  </div>

  <div v-show="status.isDone">
    <div class="alert alert-primary">投稿が完了しました。</div>
    <div class="text-center">
      <router-link class="btn btn-outline-primary px-4"
                   :to="`/bbs/posts/${postId}`">戻る</router-link>
    </div>
  </div>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import cmpForm from './cmp-form'

const STATUS = {
  AUTH   : Symbol(0),
  INPUT  : Symbol(1),
  CONFIRM: Symbol(2),
  DONE   : Symbol(3),
}

export default {
  created: async function () {
    const res = await this.$http.get('/bbs/posts/' + this.postId)
    this.post.title = res.data.title
    this.post.author = res.data.author
    this.post.content = res.data.content
    this.post.password = res.data.password
    this.$refs.form.setTitle(this.post.title)
    this.$refs.form.setAuthor(this.post.author)
    this.$refs.form.setContent(this.post.content)
  },
  data: function () {
    return {
      status: {
        symbol   : STATUS.AUTH,
        isAuth   : true,
        isInput  : false,
        isConfirm: false,
        isDone   : false,
      },
      authError: false,
      post: {
        title: '',
        author: '',
        content: '',
        password: '',
      },
      postId: this.$route.params.id,
      inputPassword: '',
    }
  },
  components: {
    'cmp-form': cmpForm,
    'cmp-page-title': cmpPageTitle,
  },
  watch: {
    'status.symbol': function (v) {
      if (v === STATUS.INPUT) {
        this.status.isAuth = false
        this.status.isInput = true
        this.status.isConfirm = false
        this.status.isDone = false
        return
      }
      if (v === STATUS.CONFIRM) {
        this.status.isAuth = false
        this.status.isInput = false
        this.status.isConfirm = true
        this.status.isDone = false
        return
      }
      if (v === STATUS.DONE) {
        this.status.isAuth = false
        this.status.isInput = false
        this.status.isConfirm = false
        this.status.isDone = true
        return
      }
      this.status.isAuth = true
      this.status.isInput = false
      this.status.isConfirm = false
      this.status.isDone = false
    }
  },
  methods: {
    clickAuth: async function () {
      const res = await this.$http.get(`/bbs/posts/${this.postId}?password=${this.inputPassword}`)
      if (res.data.auth) {
        this.status.symbol = STATUS.INPUT
        return
      }
      this.authError = true
    },
    clickInputConfirm: function () {
      if (!this.$refs.form.validate()) {
        return
      }
      this.status.symbol = STATUS.CONFIRM
      this.post.title = this.$refs.form.getTitle()
      this.post.author = this.$refs.form.getAuthor()
      this.post.content = this.$refs.form.getContent()
      this.post.password = this.$refs.form.getPassword()
    },
    clickInputCancel: function () {
      this.status.symbol = STATUS.AUTH
    },
    clickConfirmSubmit: async function () {
      const res = await this.$http.put(`/bbs/posts/${this.postId}`, this.post)
      if (res.data.isSuccess) {
        this.status.symbol = STATUS.DONE
        return
      }
    },
    clickConfirmEdit: function () {
      this.status.symbol = STATUS.INPUT
    }
  },
}
</script>

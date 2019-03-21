<template>
<div>
  <cmp-page-title title="掲示板 新規投稿" />

  <div v-show="status.isInput">
    <cmp-form ref="form" />
    <div class="text-center mt-5">
      <button class="btn btn-outline-primary px-4"
              @click="clickInputConfirm()">確認</button>
      <router-link to="/bbs/posts"
                   class="btn btn-outline-secondary ml-2 px-4">キャンセル</router-link>
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
                   to="/bbs/posts">戻る</router-link>
    </div>
  </div>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import cmpForm from './cmp-form'

const STATUS = {
  INPUT  : Symbol(0),
  CONFIRM: Symbol(1),
  DONE   : Symbol(2),
}

export default {
  data: function () {
    return {
      status: {
        symbol   : STATUS.INPUT,
        isInput  : true,
        isConfirm: false,
        isDone   : false,
      },
      post: {
        title: '',
        author: '',
        content: '',
        password: '',
      },
    }
  },
  watch: {
    'status.symbol': function (v) {
      if (v === STATUS.CONFIRM) {
        this.status.isInput = false
        this.status.isConfirm = true
        this.status.isDone = false
        return
      }
      if (v === STATUS.DONE) {
        this.status.isInput = false
        this.status.isConfirm = false
        this.status.isDone = true
        return
      }
      this.status.isInput = true
      this.status.isConfirm = false
      this.status.isDone = false
    }
  },
  methods: {
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
    clickConfirmSubmit: async function () {
      const res = await this.$http.post('/bbs/posts', this.post)
      if (res.data.isSuccess) {
        this.status.symbol = STATUS.DONE
        return
      }
    },
    clickConfirmEdit: function () {
      this.status.symbol = STATUS.INPUT
    }
  },
  components: {
    'cmp-form': cmpForm,
    'cmp-page-title': cmpPageTitle,
  },
}
</script>

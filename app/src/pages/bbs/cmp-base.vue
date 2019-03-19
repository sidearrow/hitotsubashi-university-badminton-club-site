<template>
<div>
  <div v-show="isInput">
    <cmp-form ref="form" />
    <div class="text-center mt-5">
      <button class="btn btn-outline-primary px-4"
              @click="clickConfirm()">確認</button>
      <router-link :to="backTo"
                   class="btn btn-outline-secondary ml-2 px-4">キャンセル</router-link>
    </div>
  </div>

  <div v-show="isConfirm">
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

  <div v-show="isDone">
    <div class="alert alert-primary">投稿が完了しました。</div>
    <div class="text-center">
      <router-link class="btn btn-outline-primary px-4"
                   to="/bbs/posts">戻る</router-link>
    </div>
  </div>
</div>
</template>

<script>
import cmpForm from './cmp-form'

const STATUS = {
  INPUT  : Symbol(0),
  CONFIRM: Symbol(1),
  DONE   : Symbol(2),
}
const _props = {
  backTo : String,
  title  : String,
  author : String,
  content: String,
}

export default {
  data: function () {
    return {
      status: STATUS.INPUT,
      isInput: true,
      isConfirm: false,
      isDone: false,
      post: {
        title: '',
        author: '',
        content: '',
        password: '',
      },
    }
  },
  watch: {
    title: function () {
      this.$refs.form.setTitle(this.$props.title)
    },
    author: function () {
      this.$refs.form.setAuthor(this.$props.author)
    },
    content: function () {
      this.$refs.form.setContent(this.$props.content)
    },
    status: function (val) {
      if (val === STATUS.INPUT) {
        this.isInput = true
        this.isConfirm = false
        this.isDone = false
        return
      }
      if (val === STATUS.CONFIRM) {
        this.isInput = false
        this.isConfirm = true
        this.isDone = false
        return
      }
      if (val === STATUS.DONE) {
        this.isInput = false
        this.isConfirm = false
        this.isDone = true
      }
    }
  },
  components: {
    'cmp-form': cmpForm,
  },
  props: _props,
  methods: {
    clickConfirm: function () {
      if (!this.$refs.form.validate()) {
        return
      }
      this.status = STATUS.CONFIRM
      this.post.title = this.$refs.form.getTitle()
      this.post.author = this.$refs.form.getAuthor()
      this.post.content = this.$refs.form.getContent()
      this.post.password = this.$refs.form.getPassword()
    },
    clickConfirmEdit: function () {
      this.status = STATUS.INPUT
    },
    clickConfirmSubmit: function () {
      this.status = STATUS.DONE
    }
  }
}
</script>

<template>
<div>
  <template v-if="isInput">
    <cmp-form ref="form" />
    <div class="text-center mt-2">
      <button class="btn btn-sm btn-outline-primary"
              @click="clickConfirm()">確認</button>
      <router-link to="/bbs/posts"
                   class="btn btn-sm btn-outline-secondary ml-2">キャンセル</router-link>
    </div>
  </template>

  <template v-if="isConfirm">
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2">タイトル</div>
      <div class="col-12 col-sm-8 py-2">{{ post.title }}</div>
    </div>
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2">名前</div>
      <div class="col-12 col-sm-8 py-2">{{ post.author }}</div>
    </div>
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2">本文</div>
      <div class="col-12 col-sm-8 py-2">{{ post.content }}</div>
    </div>
    <div class="row py-2">
      <div class="bg-light col-12 col-sm-4 py-2">編集 / 削除 キー</div>
      <div class="col-12 col-sm-8 py-2">{{ post.password }}</div>
    </div>
    <div class="text-center mt-3">
      <button class="btn btn-outline-primary">投稿</button>
      <button class="btn btn-outline-secondary ml-2"
              @click="clickConfirmEdit()">編集</button>
    </div>
  </template>

  <template v-if="isDone">
    done
  </template>
</div>
</template>

<script>
import cmpForm from './cmp-form'

const STATUS = {
  INPUT  : Symbol(0),
  CONFIRM: Symbol(1),
  DONE   : Symbol(2),
}

export default {
  data: function () {
    return {
      status: STATUS.CONFIRM,
      isInput: false,
      isConfirm: true,
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
    status: function (val) {
      console.log(val)
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
    }
  }
}
</script>

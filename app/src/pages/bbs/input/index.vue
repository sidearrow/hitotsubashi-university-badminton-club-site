<template>
<div>
  <!-- 入力画面 -->
  <div v-if="!isConfirm">
    <div>
      <h2 v-if="isEdit">投稿編集</h2>
      <h2 v-else>新規投稿</h2>
    </div>
  
    <cmp-edit-password
      v-if="isEdit"
      :id="postId"
      :isEdit="isEdit"
      :isDisable="!isDisable"
      v-on:doneAuth="doneAuth"
      v-on:doneDelete="doneDelete"
    />
    <cmp-input-author
      :isDisable="isDisable"
      v-model="input.author"
      ref="inputAuthor"
    />
    <cmp-input-title
      :isDisable="isDisable"
      v-model="input.title"
      ref="inputTitle"
    />
    <cmp-input-content
      :isDisable="isDisable"
      v-model="input.content"
      ref="inputContent"
    />
    <cmp-input-password
      :isDisable="isDisable"
      v-model="input.password"
      ref="inputPassword"
    />
    <div class="text-center mt-2">
      <button
        class="btn btn-sm btn-outline-primary"
        @click="clickConfirm()"
        :disabled="isDisable"
      >確認</button>
      <router-link
        :to="isEdit ? '/bbs/posts/' + postId : '/bbs/posts'"
        class="btn btn-sm btn-outline-secondary ml-2"
      >キャンセル</router-link>
    </div>
  </div>

  <!-- 確認画面 -->
  <div v-if="isConfirm">
    <dl>
      <dt>名前：</dt>
      <dd>{{ input.author }}</dd>
    </dl>
    <dl>
      <dt>タイトル：</dt>
      <dd>{{ input.title }}</dd>
    </dl>
    <dl>
      <dt>本文：</dt>
      <dd class="ws-preline">{{ input.content }}</dd>
    </dl>
    <dl>
      <dt>編集 / 削除キー：</dt>
      <dd>{{ input.password }}</dd>
    </dl>
    <div class="text-center mt-2">
      <button class="btn btn-sm btn-outline-primary"
              @click="clickSubmit()"
              :disabled="isDisable"
      >投稿</button>
      <button class="btn btn-sm btn-outline-secondary ml-2"
              @click="clickEdit()"
      >編集に戻る</button>
    </div>
  </div>
</div>
</template>

<script>
import cmpEditPassword from './cmp-edit-password'
import cmpInputAuthor from './cmp-input-author'
import cmpInputTitle from './cmp-input-title'
import cmpInputContent from './cmp-input-content'
import cmpInputPassword from './cmp-input-password'

export default {
  mounted: async function () {
    this.isDisable = this.isEdit
    if (!isEdit) {
      return
    }

    const res = await this.$http.get('/bbs/posts/' + this.$route.params.id)
    this.input.author  = res.data.author
    this.input.title   = res.data.title
    this.input.content = res.data.content
  },
  methods: {
    doneAuth: function (opassword) {
      this.isDisable = false
      this.input.opassword = opassword
    },
    doneDelete: function () {
      this.isDoneDelete = true
    },
    clickConfirm: function () {
      if (
        this.$refs.inputAuthor.check() |
        this.$refs.inputTitle.check() |
        this.$refs.inputContent.check() |
        this.$refs.inputPassword.check()
      ) {
        return
      }

      this.isConfirm = true
    },
    clickEdit: function () {
      this.isConfirm = false
    },
    clickSubmit: async function () {
      const inputData = {
        author  : this.input.author,
        title   : this.input.title,
        content : this.input.content,
        password: this.input.password,
      }

      if (this.isEdit) {
        await this.$http.put('/bbs/post/' + this.$route.params.id, inputData)
        this.$router.push({path: '/bbs/posts/' + this.postId})
      } else {
        await this.$http.post('/bbs/post', inputData)
        this.$router.push({path: '/bbs/posts'})
      }
    }
  },
  data: function () {
    return {
      isConfirm: false,
      isDisable: false,
      postId: this.$route.params.id,
      isEdit: this.$route.path !== '/bbs/new',
      input: {
        author: '',
        title: '',
        content: '',
        password: '',
      },
    }
  },
  components: {
    'cmp-edit-password': cmpEditPassword,
    'cmp-input-author': cmpInputAuthor,
    'cmp-input-title': cmpInputTitle,
    'cmp-input-content': cmpInputContent,
    'cmp-input-password': cmpInputPassword,
  }
}
</script>
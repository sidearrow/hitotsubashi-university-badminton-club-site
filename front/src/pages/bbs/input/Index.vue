<template>
<article>
  <div>
    <h1 v-if="isEdit">投稿編集</h1>
    <h1 v-if="isDelete">投稿削除</h1>
  </div>

  <template v-if="isDoneDelete">
    <div class="alert alert-primary my-5">投稿を削除しました</div>
    <div class="text-xs-center mt-3">
      <router-link to="/bbs/posts">投稿一覧へ戻る</router-link>
    </div>
  </template>

  <template v-else>
  <cmp-edit-password
    v-if="isEdit || isDelete"
    :id="postId"
    :isEdit="isEdit"
    :isDelete="isDelete"
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
      class="btn btn-primary"
      @click="clickSubmit()"
      :disabled="isDisable"
    >投稿</button>
  </div>
  <div class="mt-2">
    <a @click="$router.go(-1)">戻る</a>
  </div>
  </template>
</article>
</template>

<script>
import cmpEditPassword from './cmp-edit-password'
import cmpInputAuthor from './cmp-input-author'
import cmpInputTitle from './cmp-input-title'
import cmpInputContent from './cmp-input-content'
import cmpInputPassword from './cmp-input-password'

export default {
  mounted: function () {
    this.isDisable = this.isEdit || this.isDelete
    this.$http.get(
      '/bbs/post/' + this.$route.params.id,
    )
    .then((res) => {
      this.input.author    = res.data.author
      this.input.title     = res.data.title
      this.input.content   = res.data.content
    })
  },
  methods: {
    doneAuth: function (opassword) {
      this.isDisable = false
      this.input.opassword = opassword
    },
    doneDelete: function () {
      this.isDoneDelete = true
    },
    clickSubmit: function () {
      if (
        this.$refs.inputAuthor.check() |
        this.$refs.inputTitle.check() |
        this.$refs.inputContent.check() |
        this.$refs.inputPassword.check()
      ) {
        return
      }
      return

      const inputData = {
        author  : this.input.author,
        title   : this.input.title,
        content : this.input.content,
        password: this.input.password,
      }

      if (isEdit) {
        this.$http.put(
          '/bbs/post/' + this.$route.params.id,
          inputData
        )
        .then(() => {
          this.$router.push({path: '/bbs/posts'})
        })
      } else {
        this.$http.post(
          '/bbs/post',
          inputData
        )
        .then(() => {
          this.$router.push({path: '/bbs/posts'})
        })
      }
    }
  },
  data: function () {
    return {
      isDisable: false,
      postId: this.$route.params.id,
      isEdit: this.$route.path.split('/')[4] === 'edit',
      isDelete: this.$route.path.split('/')[4] === 'delete',
      isDoneDelete: false,
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
<template>
<article>
  <cmp-edit-password
    v-if="isEdit"
    :id="postId"
    v-on:doneAuth="doneAuth"
    :isDisable="!isDisable"
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
    <router-link 
      :to="isEdit ? '/bbs/posts/' + this.postId : '/bbs/posts'"
    >戻る</router-link>
  </div>
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
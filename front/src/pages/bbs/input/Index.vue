<template>
  <div>
    <article>
      <section>
        <div class="form-group">
          <label>名前</label>
          <input type="text" class="form-control" v-model="post.author">
        </div>
        <div class="form-group">
          <label>タイトル</label>
          <input type="text" class="form-control" v-model="post.title">
        </div>
        <div class="form-group">
          <label>本文</label>
          <textarea class="form-control" rows="20" cols="60" v-model="post.content" style="font-size:12px;line-height:1.1;"></textarea>
        </div>
        <div class="form-group">
          <label>パスワード</label>
          <input type="password" class="form-control" v-model="post.password">
        </div>
      </section>
      <div class="mt-2">
        <p
          v-for="(v, i) in errMsg" :key="i"
        >{{ v }}</p>
      </div>
      <div class="text-center mt-2">
        <button class="btn bg-main text-white" @click="clickSubmit()">投稿</button>
      </div>
      <div class="mt-2">
        <router-link to="/bbs/posts">←戻る</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import xhr from '@/xhr'
import bbsFunction from '@/pages/bbs/bbsFunction';

export default {
  created: function () {
    if (this.isNew) {
      console.log(this.$store.state.bbsInputPost)
      return
    }
    if (this.isEdit) {
      const editPost = this.$store.state.bbsInputPost
      this.post.opassword = editPost.data.password
      this.post.id = editPost.Id
      this.post.title = editPost.data.title
      this.post.author = editPost.data.author
      this.post.content = editPost.datacontent
    } else {
      console.log('reply')
    }
  },
  methods: {
    clickSubmit: function () {
      const data = new bbsFunction.data([
        this.post.author,
        this.post.title,
        this.post.content,
        this.post.password, 
      ])

      if (data.isError) {
        this.errMsg = data.errorMsg;
      } else {
        if (this.isEdit) {
          xhr.put(`/api/bbs/posts/${this.post.id}`, data.getPutData(this.post.opassword), () => {
            this.$router.push({path: '/bbs/posts'})
          })
        } else {
          xhr.post('/api/bbs/posts', data.getPostData(), () => {
            this.$router.push({path: '/bbs/posts'})
          })
        }
      }
    }
  },
  data: function () {
    return {
      isNew: this.$store.getters['bbsInputPost/isNew'],
      isEdit: this.$store.getters['bbsInputPost/isEdit'],
      post: {
        id: '',
        author: '',
        title: '',
        content: '',
        password: '',
        opassword: '',
      },
      errMsg: [],
    }
  }
}
</script>
<template>
  <article>
    <cmp-root-post v-if="mode === 'reply'"/>
    <section>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text width-70px">Name</span>
        </div>
        <input
          type="text" class="form-control"
          v-model="post.author"
        >
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text width-70px">Title</span>
        </div>
        <input
          type="text" class="form-control"
          v-model="post.title"
        >
      </div>
      <div class="mb-2">
        <textarea
          class="form-control" rows="20" cols="60" placeholder="Content"
          v-model="post.content"
        ></textarea>
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text width-100px">Password</span>
        </div>
        <input
          type="password" class="form-control"
          v-model="post.password"
        >
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
</template>

<script>
import xhr from '@/xhr'
import bbsFunction from '@/pages/bbs/bbsFunction'

import cmpRootPost from '@/pages/bbs/input/CmpRootPost'

export default {
  created: function () {
    this.mode = this.$route.path.split('/')[2]

    if (this.mode === 'edit') {
      const editPost = this.$store.state.bbsInputPost
      this.post.opassword = editPost.data.password
      this.post.id = editPost.Id
      this.post.title = editPost.data.title
      this.post.author = editPost.data.author
      this.post.content = editPost.data.content
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
          xhr.put(`/api/bbs/post/${this.post.id}`, data.getPutData(this.post.opassword), () => {
            this.$router.push({path: '/bbs/posts'})
          })
        } else {
          xhr.post('/api/bbs/post', data.getPostData(), () => {
            this.$router.push({path: '/bbs/posts'})
          })
        }
      }
    }
  },
  data: function () {
    return {
      mode: 'new',
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
  },
  components: {
    'cmp-root-post': cmpRootPost
  }
}
</script>

<style>
.width-70px {
  width: 70px;
}
.width-100px {
  width: 100px;
}
</style>
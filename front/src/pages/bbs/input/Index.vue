<template>
  <article>
    <cmp-input-password-modal
      :isOpen="isOpenInputPasswordModal"
      :id="modalTargetId"
      @close-modal="closeInputPasswordModal"
      @done-auth="setForm"
    />
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
    <div
      class="alert alert-danger mt-2"
      v-if="errMsg.length > 0"
    >
      <div
        v-for="(v, i) in errMsg" :key="i"
      >{{ v }}</div>
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
import CmpInputPasswordModal from '../CmpInputPasswordModal.vue'

export default {
  mounted: function () {
    this.mode = this.$route.path.split('/')[2]

    if (this.mode === 'edit') {
      this.isOpenInputPasswordModal = true
    }
  },
  methods: {
    closeInputPasswordModal: function () {
      this.$router.push('/bbs/pages')
    },
    setForm: function (_, res) {
      this.isOpenInputPasswordModal = false
      this.post.author = res.author
      this.post.title = res.title
      this.post.content = res.content
    },
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
      isOpenInputPasswordModal: false,
      modalTargetId: this.$route.params.id,
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
    'cmp-root-post': cmpRootPost,
    'cmp-input-password-modal': CmpInputPasswordModal,
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
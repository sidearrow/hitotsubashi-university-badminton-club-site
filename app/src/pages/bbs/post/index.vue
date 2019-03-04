<template>
<div>
  <div class="h3">{{ post.title }}</div>
  <div class="text-right">
    <router-link class="btn btn-sm btn-outline-success mr-2" :to="'/bbs/posts/' + postId + '/edit'">編集</router-link>
    <button
      class="btn btn-sm btn-outline-danger"
      @click="openInputPasswordModal(null)"
    >削除</button>
  </div>
  <div class="mb-5">
    <span>{{ post.author }}</span>
    <span class="ml-2 text-monospace"><small>{{ post.createdAt }}</small></span>
  </div>
  <article>
    <section class="ws-preline mb-3">{{ post.content }}</section>

    <div>
      <div
        v-for="(v, i) in post.comments" :key="i"
      >
        <hr/>
        <div class="mt-3">
          <span>{{ v.author }}</span>
          <span class="ml-2 text-monospace"><small>{{ v.createdAt }}</small></span>
        </div>
        <div class="text-right">
          <button
            class="btn btn-sm btn-outline-danger"
            @click="openInputPasswordModal(i)"
          >削除</button>
        </div>
        <p class="ws-preline">{{ v.content }}</p>
      </div>
    </div>
    <div class="mt-5">
      <cmp-input-comment
        @done-post="fetchData"
      />
    </div>
    <div class="mt-3">
      <router-link to="/bbs/posts">一覧へ</router-link>
    </div>
  </article>

  <cmp-password-dialog
    ref="inputPasswordModal"
    :postId="postId"
    :commentId="modalTargetCommentId"
    @comment-delete-done="fetchData"
  />
</div>
</template>

<script>
import CmpInputComment from './cmp-input-comment'
import CmpPasswordDialog from './cmp-password-modal'

export default {
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http
        .get('/bbs/posts/' + this.postId)
        .then((res) => {
          this.post = res.data
        })
    },
    openInputPasswordModal: function (commentId) {
      this.modalTargetCommentId = commentId
      this.$refs.inputPasswordModal.open()
    },
    closeInputPasswordModal: function () {
      this.$refs.inputPasswordModal.close()
    },
  },
  data () {
    return {
      post: {},
      postId: this.$route.params.id,
      modalTargetCommentId: null,
    };
  },
  components: {
    'cmp-input-comment': CmpInputComment,
    'cmp-password-dialog': CmpPasswordDialog,
  }
}
</script>
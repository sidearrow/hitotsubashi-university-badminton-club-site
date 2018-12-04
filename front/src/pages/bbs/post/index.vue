<template>
<div>
  <h1>{{ post.title }}</h1>
  <div class="text-right">
    <button
      class="btn"
      @click="$router.push(`/bbs/edit/${postId}`)"
    >
      <i class="material-icons">edit</i>
    </button>
    <button
      class="btn"
      @click="$router.push('/bbs/delete/' + postId)"
    >
      <i class="material-icons">delete</i>
    </button>
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
            class="btn"
            @click="openInputPasswordModal(i)"
          >
            <i class="material-icons">delete</i>
          </button>
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
    :id="postId"
    :cid="modalTargetCommentId"
    @click-submit="inputPasswordModalClickSubmit"
  />
</div>
</template>

<script>
import CmpPageHeader from '@/components/cmp-page-header'
import CmpInputComment from './cmp-input-comment'
import CmpPasswordDialog from '../cmp-password-modal'

export default {
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http
        .get('/bbs/post/' + this.postId)
        .then((res) => {
          this.post = res.data
        })
    },
    inputPasswordModalClickSubmit: function (inputPassword) {
        let url = '/bbs/post/' + this.postId
        if (this.modalTargetCommentId !== -1) {
          url += '/comment/' + this.modalTargetCommentId
        }

        this.$http
          .delete(url, { params: { password: inputPassword }})
          .then((res) => {
            if (res.data.isSuccess) {
              this.$refs.inputPasswordModal.close()
              if (this.modalTargetCommentId === -1) {
                alert('投稿を削除しました')
                this.$router.push('/bbs/posts')
              } else {
                alert('コメントを削除しました')
                this.fetchData()
              }
            } else {
              this.$refs.inputPasswordModal.outputError()
            }
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
      modalTargetCommentId: -1,
    };
  },
  components: {
    'cmp-page-header': CmpPageHeader,
    'cmp-input-comment': CmpInputComment,
    'cmp-password-dialog': CmpPasswordDialog,
  }
}
</script>
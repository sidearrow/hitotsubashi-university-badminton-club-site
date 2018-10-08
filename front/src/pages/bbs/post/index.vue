<template>
  <div>
    <cmp-page-header
      :title="post.title"
    />
    <div class="text-xs-right">
      <v-btn
        outline fab small color="secondary"
        @click="$router.push(`/bbs/edit/${postId}`)"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        outline fab small color="secondary"
        @click="openInputPasswordModal(-1)"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </div>
    <article>
      <div class="text-right">
        <span>{{ post.author }}</span>
        <span class="ml-2">{{ post.createdAt }}</span>
      </div>
      <section class="ws-preline mb-3">{{ post.content }}</section>

      <div>
        <div
          v-for="(v, i) in post.comments" :key="i"
        >
          <hr/>
          <div>
            <span>{{ v.isDelete ? '----' : v.author }}</span>
            <span class="ml-2 text-monospace">
              <small>{{ v.createdAt }}</small>
            </span>
          </div>
          <div class="text-xs-right">
            <v-btn
              outline fab small color="secondary"
              @click="openInputPasswordModal(i)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </div>
          <p class="ws-preline">{{ v.isDelete ? 'このコメントは削除されました' : v.content }}</p>
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
import CmpPasswordDialog from '../cmp-password-dialog'

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
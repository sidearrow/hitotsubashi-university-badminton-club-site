<template>
  <div>
    <article>
      <h2 class="h2">{{ post.title }}</h2>
      <div class="text-right">
        <span>{{ post.author }}</span>
        <span class="ml-2 text-monospace">
          <small>{{ post.createdAt }}</small>
        </span>
      </div>
      <div class="text-right">
        <cmp-dropdown-menu
          :id="postId"
          :isComment="false"
          @click-delete="openInputPasswordModal(-1)"
        />
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
          <div class="text-right">
            <cmp-dropdown-menu
              :id="postId"
              :isComment="true"
              @click-delete="openInputPasswordModal(i)"
            />
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

    <cmp-input-password-modal
      ref="inputPasswordModal"
      :id="postId"
      :cid="modalTargetCommentId"
      :isDelete="true"
      @done="deletePost"
    />
  </div>
</template>

<script>
import CmpDropdownMenu from './cmp-dropdown-menu'
import CmpInputComment from './cmp-input-comment'
import CmpInputPasswordModal from '../cmp-input-password-modal'

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
    openInputPasswordModal: function (commentId) {
      this.modalTargetCommentId = commentId
      this.$refs.inputPasswordModal.open()
    },
    closeInputPasswordModal: function () {
      this.$refs.inputPasswordModal.close()
    },
    deletePost: function (inputPassword) {
      if (this.modalTargetCommentId === -1) {
        this.$router.push('/bbs/posts')
      } else {
        this.$refs.inputPasswordModal.close()
        this.fetchData()
      }
    }
  },
  data () {
    return {
      post: {},
      postId: this.$route.params.id,
      modalTargetCommentId: -1,
    };
  },
  components: {
    'cmp-dropdown-menu': CmpDropdownMenu,
    'cmp-input-comment': CmpInputComment,
    'cmp-input-password-modal': CmpInputPasswordModal,
  }
}
</script>
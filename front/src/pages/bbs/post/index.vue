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
          :postId="post.id"
          :isComment="false"
          @childs-event="openInputPasswordModal"
        />
      </div>
      <section class="ws-preline mb-3">{{ post.content }}</section>

      <div>
        <div
          v-for="(v, i) in post.comments" :key="i"
        >
          <hr/>
          <div>
            <span>{{ v.author }}</span>
            <span class="ml-2 text-monospace">
              <small>{{ v.createdAt }}</small>
            </span>
          </div>
          <div class="text-right">
            <cmp-dropdown-menu/>
          </div>
          <p class="ws-preline"> {{ v.content }}</p>
        </div>
      </div>
      <cmp-input-comment
        @done-post="fetchData"
      />
      <div class="mt-3">
        <router-link to="/bbs/posts">一覧へ</router-link>
      </div>
    </article>

    <cmp-input-password-modal
      ref="inputPasswordModal"
      :id="post.id"
      @done-auth="deletePost"
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
        .get(`${this.$config.apiUrlBase}/bbs/post/${this.$route.params.id}`)
        .then((res) => {
          console.log(res.data)
          this.post = res.data
        })
    },
    openInputPasswordModal: function (id, isComment) {
      this.modalTargetIsComment = isComment
      this.modalTargetId = id
      this.$refs.inputPasswordModal.open()
    },
    closeInputPasswordModal: function () {
      this.$refs.inputPasswordModal.close()
    },
    deletePost: function (inputPassword) {
      if (this.modalTargetIsComment) {
        this.$http
          .delete(
            `/api/bbs/post/${this.modalTargetId}/comment/${this.modalTargetCommentId}`,
            { params: { password: inputPassword }}
          )
      } else {
        this.$http
          .delete(
            `/api/bbs/post/${this.modalTargetId}`,
            {params: {password: inputPassword}}
          )
          .then(() => {
            this.closeInputPasswordModal()
            this.posts = []
            this.isNowLoading = true
            this.fetchBBSData()
          })
      }
    }
  },
  data () {
    return {
      post: {},
      isOpenInputPasswordModal: false,
      modalTargetIsComment: false,
      modalTargetId: '',
      modalTargetCommentId: 0,
    };
  },
  components: {
    'cmp-dropdown-menu': CmpDropdownMenu,
    'cmp-input-comment': CmpInputComment,
    'cmp-input-password-modal': CmpInputPasswordModal,
  }
}
</script>
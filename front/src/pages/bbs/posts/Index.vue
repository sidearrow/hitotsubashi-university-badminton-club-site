<template>
  <div>
    <content-title title="BBS" :items="titleItems"/>
    <article>
      <section>
        <p><router-link to="/bbs/new">新規投稿</router-link></p>
        <ul>
          <li><a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a></li>
          <li><a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a></li>
        </ul>
      </section>
      <cmp-now-loading v-if="isNowLoading"/>
      <section v-else>
        <div
          v-for="(v, i) in posts" :key="i"
          class="mb-4"
        >
          <div>
            <span>{{ v.title }}</span>
            <span class="ml-2 badge bg-main text-white">{{ v.author }}</span>
            <div class="text-right text-secondary">
              <cmp-dropdown-menu
                :postId="v.id"
                :isComment="false"
                @childs-event="openInputPasswordModal"
              />
              <span class="ml-2 text-monospace"><small>{{ formatDate(v.updatedAt._seconds) }}</small></span>
            </div>
          </div>
          <div class="ml-2">
            <div class="ws-preline text-08rem">{{ v.content }}</div>
            <div
              v-for="(vComment, i) in v.comments" :key="i"
              v-if="i > 0"
              class="mt-2 text-08rem"
            >
              <hr/>
              <div>
                <span class="badge bg-main text-white">{{ vComment.author }}</span>
              </div>
              <div class="text-right text-secondary">
                <cmp-dropdown-menu
                  :postId="v.id"
                  :isComment="true"
                  @childs-event="openInputPasswordModal"
                />
                <span class="ml-2 text-monospace"><small>{{ formatDate(vComment.createdAt._seconds) }}</small></span>
              </div>
              <div class="ml-2">{{ vComment.content }}</div>
            </div>
          </div>
          <hr/>
        </div>
      </section>
      <div class="text-center">
        <button class="btn bg-main text-white" @click="fetchBBSData(lastPostId)">More</button>
      </div>
    </article>
    <cmp-input-password-modal
      ref="inputPasswordModal"
      :id="modalTargetId"
      @done-auth="deletePost"
    />
  </div>
</template>

<script>
import ContentTitle from '@/components/cmp-content-title'
import CmpNowLoading from '@/components/cmp-now-loading'
import CmpDropdownMenu from './cmp-dropdown-menu'
import CmpInputPasswordModal from '../cmp-input-password-modal'

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
  },
  created: function () {
    this.fetchBBSData()
  },
  methods: {
    formatDate: function (sec) {
      const d = new Date(sec * 1000)
      const f = (int) => {
        return ('0' + String(int)).substr(-2)
      }
      return `${d.getFullYear()}/${f(d.getMonth()+1)}/${f(d.getDate())} ${f(d.getHours())}:${f(d.getMinutes())}`
    },
    fetchBBSData: function (id) {
      this.$http
        .get(`${this.$config.apiUrlBase}/bbs/posts${(typeof id === 'undefined') ? '' : '/' + id}`)
        .then((res) => {
          this.isNowLoading = false
          res.data.forEach((v) => {
            this.posts.push(v)
          })
          this.lastPostId = this.posts[this.posts.length - 1].id
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
  components: {
    'content-title': ContentTitle,
    'cmp-now-loading': CmpNowLoading,
    'cmp-dropdown-menu': CmpDropdownMenu,
    'cmp-input-password-modal': CmpInputPasswordModal,
  },
  data: function () {
    return {
      isNowLoading: true,
      lastPostId: '',
      titleItems: [this.$config.pageList.bbs],
      posts: [],
      isOpenInputPasswordModal: false,
      modalTargetIsComment: false,
      modalTargetId: '',
      modalTargetCommentId: 0,
    }
  },
}
</script>
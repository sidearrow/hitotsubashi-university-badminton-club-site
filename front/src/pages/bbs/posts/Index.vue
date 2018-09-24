<template>
  <div>
    <content-title title="BBS" :items="titleItems"/>
    <article>
      <section>
        <p><router-link to="/bbs/new">新規投稿</router-link></p>
        <ul>
          <li><a :href="bbsUrl.old_a" target="_blank">旧掲示板１</a></li>
          <li><a :href="bbsUrl.old_b" target="_blank">旧掲示板２</a></li>
        </ul>
      </section>
      <section>
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
                @childs-event="openInputPasswordModal"
              />
              <span class="ml-2 text-monospace"><small>{{ formatDate(v.updatedAt._seconds) }}</small></span>
            </div>
          </div>
          <div class="ml-2">
            <div class="ws-preline text-08rem">{{ v.content }}</div>
          </div>
          <hr/>
        </div>
      </section>
      <div class="text-center">
        <button class="btn bg-main text-white" @click="fetchBBSData(lastPostId)">More</button>
      </div>
    </article>
    <cmp-input-password-modal
      :isOpen="isOpenInputPasswordModal"
      :id="modalTargetId"
      @child-event="closeInputPasswordModal"
    />
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle'
import cmpDropdownMenu from './CmpDropdownMenu.vue'
import CmpInputPasswordModal from '../CmpInputPasswordModal.vue'
import config from '@/config'
import xhr from '@/xhr'

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
      let url = '/api/bbs/posts'
      if (typeof id !== 'undefined') {
        url += '/' + id
      }

      xhr.get(url, null, (res) => {
        this.posts = res
        this.lastPostId = this.posts[this.posts.length - 1].id
      })
    },
    openInputPasswordModal: function (id) {
      this.modalTargetId = id
      this.isOpenInputPasswordModal = true
    },
    closeInputPasswordModal: function () {
      this.isOpenInputPasswordModal = false
    }
  },
  components: {
    'content-title': ContentTitle,
    'cmp-dropdown-menu': cmpDropdownMenu,
    'cmp-input-password-modal': CmpInputPasswordModal,
  },
  data: function () {
    return {
      lastPostId: '',
      titleItems: [config.pageList.bbs],
      posts: [],
      bbsUrl: config.bbs,
      isOpenInputPasswordModal: false,
      modalTargetId: '',
    }
  },
}
</script>
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
            <span>
              <router-link :to="`/bbs/post/${v.id}`">{{ v.title }}</router-link>
            </span>
            <span class="ml-2 badge bg-main text-white">{{ v.author }}</span>
            <div class="text-right text-secondary">
              <span class="ml-2 text-monospace"><small>{{ v.updatedAt }}</small></span>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center">
        <button class="btn bg-main text-white" @click="fetchBBSData(lastPostId)">More</button>
      </div>
    </article>

  </div>
</template>

<script>
import ContentTitle from '@/components/cmp-content-title'
import CmpNowLoading from '@/components/cmp-now-loading'

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
  },
  created: function () {
    this.fetchBBSData()
  },
  methods: {
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
  },
  components: {
    'content-title': ContentTitle,
    'cmp-now-loading': CmpNowLoading,
  },
  data: function () {
    return {
      isNowLoading: true,
      lastPostId: '',
      titleItems: [this.$config.pageList.bbs],
      posts: [],
    }
  },
}
</script>
<template>
<div>
  <cmp-page-title title="掲示板" />
  <p>試合の結果などをお知らせします。</p>
  <section class="mb-3">
    <p><router-link to="/bbs/posts/create">新規投稿</router-link></p>
    <ul>
      <li><a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a></li>
      <li><a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a></li>
    </ul>
  </section>

  <div>
    <div v-for="(v, i) in posts" :key="i" class="mb-4">
      <div>
        <router-link :to="`/bbs/posts/${v.id}`">{{ v.title }}</router-link>
      </div>
      <div class="mt-2" style="font-size:0.8rem">
        <div>
          <span>by {{ v.author }}</span>
          <span class="ml-4 text-monospace text-secondary">{{ v.updatedAt }}</span>
        </div>
        <div>{{ v.content.slice(0, 100) + (v.content.length > 100 ? ' ...' : '') }}</div>
      </div>
    </div>
  </div>

  <div v-if="isNowLoading" class="text-center">
    <cmp-now-loading/>
  </div>

  <div class="text-center mt-5">
    <button @click="fetchBBSData()"
            class="btn btn-outline-primary px-4">MORE</button>
  </div>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import cmpNowLoading from '@/components/cmp-now-loading'

export default {
  beforeCreate () {
    document.title = this.$config.title.bbs
  },
  created: function () {
    this.fetchBBSData()
  },
  methods: {
    fetchBBSData: async function () {
      let url = '/bbs/posts'
      this.isNowLoading = true
      if (this.lastPostId !== '') {
        url += '?id=' + this.lastPostId
      }
      const res = await this.$http.get(url)
      this.isNowLoading = false
      res.data.forEach((v) => {
        this.posts.push(v)
      })
      this.lastPostId = this.posts[this.posts.length - 1].id
    },
  },
  components: {
    'cmp-page-title': cmpPageTitle,
    'cmp-now-loading': cmpNowLoading,
  },
  data: function () {
    return {
      narrowDate: this.$route.params.date,
      isNowLoading: true,
      lastPostId: '',
      posts: [],
    }
  },
}
</script>

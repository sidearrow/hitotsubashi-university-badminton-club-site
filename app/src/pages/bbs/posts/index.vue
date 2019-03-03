<template>
<div>
  <cmp-page-title title="掲示板" />
  <p>試合の結果などをお知らせします。</p>
  <section class="mb-3">
    <p><router-link to="/bbs/new">新規投稿</router-link></p>
    <ul>
      <li><a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a></li>
      <li><a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a></li>
    </ul>
  </section>

  <div>
    <div
      v-for="(v, i) in posts" :key="i"
      class="mb-4"
    >
      <div>
        <router-link
          :to="`/bbs/posts/${v.id}`"
        >{{ v.title }}</router-link>
      </div>
      <div class="">
        <small>
          <span>by {{ v.author }}</span>
          <span class="ml-4 text-monospace">{{ v.updatedAt }}</span>
        </small>
      </div>
      <div><small>{{ v.content.slice(0, 100) + (v.content.length > 100 ? ' ...' : '') }}</small></div>
    </div>
  </div>

  <div
    v-if="isNowLoading"
    class="text-center"
  >
    <cmp-now-loading/>
  </div>

  <div
    v-if="typeof narrowDate === 'undefined'"
    class="text-center mt-3 mb-5"
  >
    <button
      @click="fetchBBSData(lastPostId)"
      class="btn btn-sm btn-outline-primary"
    >MORE</button>
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
    fetchBBSData: function (id) {
      let url = '/bbs/posts'
      this.isNowLoading = true
      if (typeof id !== 'undefined') {
        url += '/' + id
      } else if (typeof this.narrowDate !== 'undefined') {
        url += '/date/' + this.narrowDate
      }
      this.$http
        .get(url)
        .then((res) => {
          this.isNowLoading = false
          if (res.data.length === 0) {
            return
          }
          res.data.forEach((v) => {
            this.posts.push(v)
          })
          this.lastPostId = this.posts[this.posts.length - 1].id
        })
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
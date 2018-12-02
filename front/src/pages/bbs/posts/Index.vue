<template>
<div>
  <h1>掲示板</h1>
  <p>試合の結果などをお知らせします。</p>
  <section class="mb-3">
    <p><router-link to="/bbs/new">新規投稿</router-link></p>
    <ul>
      <li><a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a></li>
      <li><a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a></li>
    </ul>
  </section>

  <div
    v-if="isNowLoading"
    class="text-xs-center"
  >
    <v-progress-circular
      :size="50"
      indeterminate
      color="secondary"
    ></v-progress-circular>
  </div>

  <div
    v-else
    class="list-group list-group-flush"
  >
    <div
      v-for="(v, i) in posts"
      :key="i"
      class="list-group-item"
    >
      <div>
        <router-link
          :to="`/bbs/post/${v.id}`"
        >{{ v.title }}</router-link>
      </div>
      <div class="">
        <small>
          <span>by {{ v.author }}</span>
          <span class="ml-4">{{ v.updatedAt }}</span>
        </small>
      </div>
    </div>
  </div>
  <div
    v-if="typeof narrowDate === 'undefined'"
    class="text-center mt-3"
  >
    <button
      @click="fetchBBSData(lastPostId)"
      class="btn bg-main text-white"
    >MORE</button>
  </div>
</div>
</template>

<script>
import cmpPageHeader from '@/components/cmp-page-header'
import CmpNowLoading from '@/components/cmp-now-loading'

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
    'cmp-page-header': cmpPageHeader,
    'cmp-now-loading': CmpNowLoading,
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
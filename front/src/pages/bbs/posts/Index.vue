<template>
  <div>
    <cmp-page-header
      title="掲示板"
      text="試合の結果などをお知らせします。"
    />
    <article>
      <section>
        <p><router-link to="/bbs/new">新規投稿</router-link></p>
        <ul>
          <li><a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">旧掲示板１</a></li>
          <li><a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板２</a></li>
        </ul>
      </section>
      <cmp-now-loading v-if="isNowLoading"/>
      <v-list two-line v-else>
        <template
          v-for="(v, i) in posts"
        >
          <v-list-tile
            :key="i"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link :to="`/bbs/post/${v.id}`">{{ v.title }}</router-link>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <v-chip
                  outline label small
                  color="secondary"
                >{{ v.author }}</v-chip>
                <span class="ml-2">{{ v.updatedAt }}</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <div class="text-xs-center">
        <v-btn
          color="primary"
          @click="fetchBBSData(lastPostId)"
        >More</v-btn>
      </div>
    </article>

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
      this.$http
        .get('/bbs/posts' + ((typeof id === 'undefined') ? '' : '/' + id))
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
    'cmp-page-header': cmpPageHeader,
    'cmp-now-loading': CmpNowLoading,
  },
  data: function () {
    return {
      isNowLoading: true,
      lastPostId: '',
      posts: [],
    }
  },
}
</script>
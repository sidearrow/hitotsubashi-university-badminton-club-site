<template>
  <div>
    <content-title title="BBS" :items="titleItems"/>
    <article>
      <section>
        <p><router-link to="/bbs/input">新規投稿</router-link></p>
        <ul>
          <li><a :href="bbsUrl.old_a" target="_blank">旧掲示板１</a></li>
          <li><a :href="bbsUrl.old_b" target="_blank">旧掲示板２</a></li>
        </ul>
      </section>
      <section>
        <details
          v-for="(v, i) in posts" :key="i"
          class="mb-4"
        >
          <summary>
            <span>{{ v.title }}</span>
            <span class="ml-2 badge bg-main text-white">{{ v.author }}</span>
            <div class="text-right text-secondary">
              <span class="ml-2 text-monospace"><small>{{ formatDate(v.updatedAt._seconds) }}</small></span>
            </div>
          </summary>
          <div class="ml-2">
            <p class="text-right">
              <a><i class="material-icons" @click="clickFunc(v.id, 'e')">edit</i></a>
              <a><i class="material-icons" @click="clickFunc(v.id, 'd')">delete</i></a>
            </p>
            <div class="ws-preline text-08rem">{{ v.content }}</div>
          </div>
        </details>
      </section>
      <div class="text-center">
        <button class="btn bg-main text-white" @click="fetchBBSData(lastPostId)">More</button>
      </div>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle'
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
        for (let key in res) {
          res[key].id = key
          this.posts.push(res[key])
        }
        this.lastPostId = this.posts[this.posts.length - 1].id
      })
    },
    clickFunc: function (id, e) {
      return
      const inputPassword = window.prompt('パスワードを入力してください');
      xhr.get(`/api/bbs/posts/${id}`, { password: inputPassword }, (res) => {
        if (res.body.auth) {
          if (e === 'e') {
            // edit
            sessionStorage.edit = 1
            sessionStorage.password = inputPassword
            sessionStorage.id = id
            sessionStorage.title = res.body.post.title
            sessionStorage.content = res.body.post.content
            sessionStorage.author = res.body.post.author
            this.$router.push('/bbs/input');
          } else {
            // delete
            xhr.delete(`/api/bbs/posts/${id}`, { password: inputPassword })
          }
        } else {
          window.alert('パスワードが間違っています');
        }
      })
    },
  },
  components: {
    'content-title': ContentTitle,
  },
  watch: {
    '$route.params.page': function () {
      this.setPage()
    }
  },
  data: function () {
    return {
      lastPostId: '',
      titleItems: [config.pageList.bbs],
      posts: [],
      bbsUrl: config.bbs,
    }
  },
}
</script>
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
        <table class="table">
          <tbody>
            <tr v-for="v in posts">
              <td>
                <details>
                  <summary>
                    <span>{{ v.title }}</span>
                    <span class="ml-2 badge bg-main text-white">{{ v.contributor }}</span>
                    <div class="text-right text-secondary">
                      <span class="ml-2"><small>{{ v.update_at }}</small></span>
                    </div>
                  </summary>
                  <div class="ml-2">
                    <p class="text-right">
                      <a><i class="material-icons" @click="clickFunc(v.id, 'e')">edit</i></a>
                      <a><i class="material-icons" @click="clickFunc(v.id, 'd')">delete</i></a>
                    </p>
                    <div style="white-space:pre-line">{{ v.content }}</div>
                  </div>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center mt-3">
          <button class="btn bg-main text-white">More</button>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import axios from "axios"
import ContentTitle from '@/components/ContentTitle';
import config from '@/config';

import { buildUrl } from '@/util'

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
  },
  created: function () {
    axios
      .get(`${config.apiBase}bbs/pages/${this.$route.params.page}`)
      .then((res) => {
        this.posts = res.data.body.posts
      })
  },
  methods: {
    clickFunc: function (id, e) {
      const inputPassword = window.prompt('パスワードを入力してください');
      axios
        .get(buildUrl(`bbs/posts/${id}`, {password: inputPassword}))
        .then((res) => {
          if (res.data.body.auth) {
            if (e === 'e') {
              // edit
              sessionStorage.edit = 1
              sessionStorage.password = inputPassword
              sessionStorage.id = id
              sessionStorage.title = res.data.body.post.title
              sessionStorage.content = res.data.body.post.content
              sessionStorage.contributor = res.data.body.post.contributor
              this.$router.push(`bbs/input`);
            } else {
              // delete
              axios.delete(buildUrl(`bbs/posts/${id}`))
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
  data: function () {
    return {
      titleItems: [config.pageList.bbs],
      pageNum: 1,
      posts: [],
      bbsUrl: config.bbs,
    }
  },
}
</script>
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
            <tr v-for="(v, k) in posts">
              <td>
                <details>
                  <summary>
                    <span>{{ v.title }}</span>
                    <span class="ml-2 badge bg-main text-white">{{ v.name }}</span>
                    <div class="text-right text-secondary">
                      <span class="ml-2"><small>{{ v.date }}</small></span>
                    </div>
                  </summary>
                  <div class="ml-2">
                    <p class="text-right">
                      <a><i class="material-icons" @click="clickFunc(k, 'e')">edit</i></a>
                      <a><i class="material-icons" @click="clickFunc(k, 'd')">delete</i></a>
                    </p>
                    <div style="white-space:pre-line">{{ v.content }}</div>
                  </div>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center mt-3">
          <button @click="clickMore" class="btn bg-main text-white">More</button>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import config from '@/config';

import bbsFunction from '@/components/pages/bbs/bbsFunction';

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
  },
  created: async function () {
    const tmp = await bbsFunction.selectAll();
    tmp.forEach((v) => {
      this.lastPost = v;
      this.$set(this.posts, v.id, v.data());
    });
  },
  methods: {
    clickFunc: function (id, e) {
      const tmp = window.prompt('パスワードを入力してください');
      if (tmp === this.posts[id].password) {
        if (e === 'e') {
          sessionStorage.password = tmp;
          this.$router.push(`bbs/input?id=${id}`);
        } else {
          bbsFunction.delete(id, this.posts[id]);
        }
      } else if (tmp !== null) {
        window.alert('パスワードが間違っています');
      }
    },
    clickMore: async function () {
      const tmp = await bbsFunction.selectAll(this.lastPost);
      tmp.forEach((v) => {
        this.lastPost = v;
        this.$set(this.posts, v.id, v.data());
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
      posts: {},
      lastPost: {},
      bbsUrl: config.bbs,
    }
  },
}
</script>
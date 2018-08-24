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
        <details v-for="(v, k) in posts">
          <summary>
            <span>{{ v.title }}</span>
            <span class="ml-2">{{ v.name }}</span>
            <span class="ml-2">{{ v.date }}</span>
          </summary>
          <div>
            <p class="text-right">
              <a><i class="material-icons" @click="click(k, 'e')">edit</i></a>
              <a><i class="material-icons" @click="click(k, 'd')">delete</i></a>
            </p>
            <div style="white-space:pre-line">{{ v.content }}</div>
          </div>
          </details>
        </details>
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
  created () {
    bbsFunction.get((res) => {
      res.forEach((doc) => {
        this.$set(this.posts, doc.id, doc.data());
      });
    });
  },
  methods: {
    click: function (id, e) {
      const input = window.prompt('パスワードを入力してください');
      console.log(id);
    }
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      titleItems: [config.pageList.bbs],
      pageNum: 1,
      posts: {},
      bbsUrl: config.bbs,
    }
  },
}
</script>
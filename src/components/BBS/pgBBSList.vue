<template>
  <main>
    <content-title title="BBS"/>
    <article>
      <section class="mdc-card">
        <ul class="mdc-list">
          <li class="mdc-list-item"><a :href="bbsUrl.old_a" target="_blank">旧掲示板１</a></li>
          <li class="mdc-list-item"><a :href="bbsUrl.old_b" target="_blank">旧掲示板２</a></li>
          <li class="mdc-list-item"><router-link to="/bbs/input">新規投稿</router-link></li>
        </ul>
      </section>
      <section class="mdc-card">
        <div>
          <router-link to="/bbs/list/2018">2018</router-link>
          <router-link to="/bbs/list/2017">2017</router-link>
        </div>
      </section>
      <section class="mdc-card">
        <div v-for="(post, key) in posts">
          <p><router-link :to="`/bbs/detail/${key}`">{{ post.title }}</router-link></p>
          <span class="mdc-list-item__secondary-text">
            <span>{{ post.name }}</span>
            <span>{{ post.date }}</span>
          </span>
          <hr class="mdc-list-divider slf-bbs-post-hr">
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from '../ContentTitle';
import axios from 'axios';
import config from '@/Config';

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
    axios.get(config.firebase.databaseURL + '/bbs.json').then((res) => {
      this.posts = res.data;
    });
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      pageNum: 1,
      posts: [],
      bbsUrl: config.bbs,
    }
  },
}
</script>

<style>
.slf-bbs-post-hr {
  margin: 16px;
}
</style>
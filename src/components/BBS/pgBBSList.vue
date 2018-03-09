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
        <div v-for="(post, key) in posts">
          <p><router-link :to="`/bbs/detail/${key}`">{{ post.title }}</router-link></p>
          <span class="mdc-list-item__secondary-text">
            <span>{{ post.name }}</span>
            <span>{{ post.date }}</span>
          </span>
          <hr class="mdc-list-divider slf-bbs-post-hr">
        </div>
        <div class="slf-talign-center">
          <button class="mdc-button">more...</button>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from '../ContentTitle';
import {database} from '@/main.js';
import config from '@/Config';

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
    database.ref('/bbs/').once('value', (res) => {
      this.posts = res.val();
    });
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
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
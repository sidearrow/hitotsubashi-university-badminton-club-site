<template>
  <div>
    <h1 class="mdc-typography--display1">掲示板</h1>
    <ul class="mdc-list">
      <li class="mdc-list-item"><a :href="bbsUrl.old_a" target="_blank">旧掲示板１</a></li>
      <li class="mdc-list-item"><a :href="bbsUrl.old_b" target="_blank">旧掲示板２</a></li>
      <li class="mdc-list-item"><router-link to="/bbs/input">新規投稿</router-link></li>
    </ul>
    <ul class="mdc-list mdc-list--two-line">
      <li class="mdc-list-item" v-for="(post, key) in posts">
        <span class="mdc-list-item__graphic">
          <i class="material-icons">subject</i>
        </span>
        <span class="mdc-list-item__text">
          {{ post.title }}
          <span class="mdc-list-item__secondary-text">
            <span>{{ post.name }}</span>
            <span>{{ post.date }}</span>
          </span>
        </span>
        <router-link :to="`/bbs/detail/${key}`" class="mdc-list-item__meta material-icons">chevron_right</router-link>
      </li>
    </ul>
    <!--<pagination></pagination>-->
  </div>
</template>

<script>
import Pagination from './BBSListPagination.vue';
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
    'pagination': Pagination,
  },
  data: function () {
    return {
      posts: [],
      bbsUrl: config.bbs,
    }
  },
}
</script>
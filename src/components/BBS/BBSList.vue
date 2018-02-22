<template>
  <div>
    <ul class="mdc-list mdc-list--two-line">
      <li class="mdc-list-item"><router-link to="/bbs/input">新規投稿</router-link></li>
      <li class="mdc-list-item" :data-post="key" v-for="(post, key) in posts">
        <span class="mdc-list-item__text">
          {{ post.title }}
          <span class="mdc-list-item__secondary-text">
            <span>{{ post.name }}</span>
            <span>{{ post.date }}</span>
          </span>
        </span>
        <router-link :to="`/bbs/list/${key}`" class="mdc-list-item__meta material-icons" style="text-decoration:none">chevron_right</router-link>
      </li>

    </ul>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from './BBSListPagination.vue';
import {database} from '@/main.js';

export default {
  mounted () {
    database.ref('/bbs/').once('value', (res) => {
      this.posts = res.val();
    });
  },
  components: {
    'pagination': Pagination,
  },
  methods: {
  },
  data () {
    return {
      posts: [],
    }
  },
}
</script>
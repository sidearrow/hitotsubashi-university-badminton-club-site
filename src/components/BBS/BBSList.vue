<template>
  <div>
    <ul class="mdc-list mdc-list--two-line">
      <li class="mdc-list-item"><router-link to="/bbs/input">新規投稿</router-link></li>
      <li class="mdc-list-item" :data-post="key" v-for="(post, key) in posts" @click="clickList">
        <span class="mdc-list-item__text">
          {{ post.title }}
          <span class="mdc-list-item__secondary-text">
            <span>{{ post.name }}</span>
            <span>{{ post.date }}</span>
          </span>
        </span>
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
    clickList: function (event) {
      const postId = event.target.getAttribute('data-post');
      this.$router.push('/bbs/list/' + postId);
    },
  },
  data () {
    return {
      posts: [],
    }
  },
}
</script>
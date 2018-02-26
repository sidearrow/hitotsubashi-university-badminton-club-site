<template>
  <div>
    <div v-if="isListPage">
      <ul class="mdc-list mdc-list--two-line">
        <li class="mdc-list-item"><router-link to="/bbs/input">新規投稿</router-link></li>
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
          <a href="#" class="mdc-list-item__meta material-icons" @click="togglePageType" :data-post="key" style="text-decoration:none">chevron_right</a>
        </li>
      </ul>
      <!--<pagination></pagination>-->
    </div>
    <div v-else>
      <p><a class="material-icons" @click="togglePageType">chevron_left</a></p>
      <h4>{{detailPost.title}}</h4>
      <p>{{detailPost.name}}</p>
      <p>{{detailPost.date}}</p>
      <p class="slf-talign-right">
        <button class="mdc-button mdc-button--raised"><i class="material-icons mdc-button__icon">mode_edit</i>Edit</button>
        <button class="mdc-button mdc-button--raised"><i class="material-icons mdc-button__icon">delete</i>Delete</button>
      </p>
      <p>{{detailPost.content}}</p>
    </div>
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
    togglePageType: function (event) {
      this.isListPage = !this.isListPage;
      if (!this.isListPage) {
        const id = event.target.getAttribute('data-post');
        this.detailPost = this.posts[id];
      }
    }
  },
  data () {
    return {
      isListPage: true,
      posts: [],
      detailPost: [],
    }
  },
}
</script>
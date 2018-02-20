<template>
  <div>
    <p><router-link to="/bbs/input">新規投稿</router-link></p>
    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp" v-for="(post, key) in posts">
      <div class="mdl-card__supporting-text">
        <h4>{{ post.title }}</h4>
        <p>
          <small>{{ post.name }}</small>
          <small>{{ post.date }}</small>
        </p>
      </div>
      <div class="mdl-card__supporting-text slf-expand-more">
        <i class="material-icons" @click="expandMore">expand_more</i>
      </div>
      <div class="mdl-card__supporting-text slf-expand-content">
        <div v-html="post.content.replace(/\n/g, '<br/>')"></div>
      </div>
      <div class="mdl-card__supporting-text slf-expand-less">
        <i class="material-icons" @click="expandLess">expand_less</i>
      </div>
    </div>
    <pagination></pagination>
    <dialog></dialog>
  </div>
</template>

<script>
import Pagination from './BBSListPagination.vue';
import Modal from './BBSListModal.vue';

import {database} from '@/main.js';

export default {
  mounted () {
    database.ref('/bbs').once('value', (snapshot) => {
      this.posts = snapshot.val();
    });
  },
  props: ['modaldata'],
  components: {
    'pagination': Pagination,
  },
  methods: {
    expandMore: function (event) {
      event.target.parentNode.style.display = 'none';
      event.target.parentNode.nextElementSibling.style.display = 'block';
      event.target.parentNode.nextElementSibling.nextElementSibling.style.display = 'block';
    },
    expandLess: function (event) {
      event.target.parentNode.style.display = 'none';
      event.target.parentNode.previousElementSibling.style.display = 'none';
      event.target.parentNode.previousElementSibling.previousElementSibling.style.display = 'block';
    },
    clickFunction: function (event) {
      this.modal.id = event.target.parentNode.getAttribute('data-post-id');
      this.modal.title = event.target.parentNode.getAttribute('data-post-title');
      this.modal.function = event.target.getAttribute('data-function');
    }
  },
  data () {
    return {
      modal: {
        id: '',
        title: '',
        function: '',
      },
      posts: [],
    }
  },
}
</script>

<style>
.slf-expand-less {
  text-align: center;
  display: none;
}
.slf-expand-content {
  display: none;
}
.slf-expand-more {
  text-align: center;
}
</style>
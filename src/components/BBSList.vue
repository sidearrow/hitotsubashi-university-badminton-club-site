<template>
  <div>
    <p><router-link to="/bbs/input">新規投稿</router-link></p>
    <div class="card mb-2" v-for="(post, key) in posts">
      <div class="card-header">
        <div class="row">
          <div class="col-10" data-toggle="collapse" :data-target="'#post' + key">
            <p>{{ post.title }}</p>
            <p>
              <small>{{ post.date }}</small>
              <small>{{ post.name }}</small>
            </p>
          </div>
          <div class="col-2 text-right">
            <div class="btn-group">
              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              <div class="dropdown-menu dropdown-menu-right" :data-post-id="key" :data-post-title="post.title">
                <button class="dropdown-item" type="button">Reply</button>
                <button class="dropdown-item" type="button" @click="clickFunction" data-toggle="modal" data-target="#inputPassModal" data-function="edit">Edit</button>
                <button class="dropdown-item" type="button" @click="clickFunction" data-toggle="modal" data-target="#inputPassModal" data-function="delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :id="'post' + key" class="collapse" data-parent="#accordion">
        <div class="card-body" v-html="post.content.replace(/\n/g, '<br/>')" style="font-size:.8rem"></div>
      </div>
    </div>
    <pagination></pagination>
    <modal v-bind="modal"></modal>
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
    'modal': Modal,
  },
  methods: {
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
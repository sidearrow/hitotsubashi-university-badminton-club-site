<template>
  <div>
    <p><router-link to="/bbs/input">新規投稿</router-link></p>
    <div class="card mb-2" v-for="post in posts">
      <div class="card-header" id="headingOne">
        <div class="row">
          <div class="col-10" data-toggle="collapse" :data-target="'#post' + post.id">
            <p>{{ post.title }}</p>
            <p>
              <small>Data</small>
              <small>Name</small>
            </p>
          </div>
          <div class="col-2 text-right">
            <div class="btn-group">
              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Reply</button>
                <button class="dropdown-item" type="button" @click="clickFunction" data-toggle="modal" data-target="#inputPassModal" :data-post-id="post.id" :data-post-title="post.title" data-function="edit">Edit</button>
                <button class="dropdown-item" type="button" @click="clickFunction" data-toggle="modal" data-target="#inputPassModal" :data-post-id="post.id" :data-post-title="post.title" data-function="delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :id="'post' + post.id" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">content</div>
      </div>
    </div>
    <pagination></pagination>
    <modal :postid="modal.postId" :posttitle="modal.postTitle" :function="modal.function"></modal>
  </div>
</template>

<script>
import Pagination from './BBSListPagination.vue';
import Modal from './BBSListModal.vue';

export default {
  props: ['postid', 'posttitle', 'function'],
  components: {
    'pagination': Pagination,
    'modal': Modal,
  },
  methods: {
    clickFunction: function (event) {
      this.modal.postId = event.target.getAttribute('data-post-id');
      this.modal.postTitle = event.target.getAttribute('data-post-title');
      this.modal.function = event.target.getAttribute('data-function');
    }
  },
  data () {
    return {
      modal: {
        postId: '',
        postTitle: '',
        function: '',
      },
      posts: [
        {id: '10001', title: 'title', content: 'text'},
        {id: '10002', title: 'title', content: 'text'},
        {id: '10003', title: 'title', content: 'text'},
        {id: '10004', title: 'title', content: 'text'},
      ],
    }
  },
}
</script>
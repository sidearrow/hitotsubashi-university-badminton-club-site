<template>
  <div>
    <div class="card" v-for="post in posts">
      <div class="card-header" id="headingOne">
        <div class="row">
          <div class="col-10" data-toggle="collapse" :data-target="'#post' + post.id">
            <p>Title</p>
            <p>
              <small>Data</small>
              <small>Name</small>
            </p>
          </div>
          <div class="col-2">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Reply</button>
                <button class="dropdown-item" type="button" @click="clickFunction" :data-pageid="post.id" data-function="edit">Edit</button>
                <button class="dropdown-item" type="button" @click="clickFunction" :data-pageid="post.id" data-function="delete">Delete</button>
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
    <modal :pageid="modal.pageId" :function="modal.function"></modal>
  </div>
</template>

<script>
import Pagination from './BBSListPagination.vue';
import Modal from './BBSListModal.vue';

export default {
  props: ['pageid', 'function'],
  components: {
    'pagination': Pagination,
    'modal': Modal,
  },
  methods: {
    clickFunction: function (event) {
      this.modal.pageId = event.target.getAttribute('data-pageid');
      this.modal.function = event.target.getAttribute('data-function');
    }
  },
  data () {
    return {
      modal: {
        pageId: '',
        function: '',
      },
      posts: [
        {id: '10001', content: 'text'},
        {id: '10002', content: 'text'},
        {id: '10003', content: 'text'},
        {id: '10004', content: 'text'},
      ],
    }
  },
}
</script>
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
      <p><router-link to="/bbs/list">投稿一覧に戻る</router-link></p>
      <p><a class="material-icons" @click="togglePageType">chevron_left</a></p>
      <h4>{{detailPost.title}}</h4>
      <p>{{detailPost.name}}</p>
      <p>{{detailPost.date}}</p>
      <p class="slf-talign-right">
        <button class="mdc-button mdc-button--raised" data-func="edit" @click="openModal"><i class="material-icons mdc-button__icon">mode_edit</i>Edit</button>
        <button class="mdc-button mdc-button--raised" data-func="delete" @click="openModal"><i class="material-icons mdc-button__icon">delete</i>Delete</button>
      </p>
      <p>{{detailPost.content}}</p>
    </div>
    <aside id="bbs-dialog" class="mdc-dialog">
      <div class="mdc-dialog__surface">
        <header class="mdc-dialog__header">
          <h2 class="mdc-dialog__header__title">この投稿を{{dialogFunc === 'edit' ? '編集' : '削除'}}しますか</h2>
        </header>
        <section class="mdc-dialog__body">
        </section>
        <footer class="mdc-dialog__footer">
          <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Cancel</button>
          <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Submit</button>
        </footer>
      </div>
      <div class="mdc-dialog__backdrop"></div>
    </aside>
  </div>
</template>

<script>
import Pagination from './BBSListPagination.vue';
import {database} from '@/main.js';
import {MDCDialog} from '@material/dialog';

export default {
  beforeCreate () {
    database.ref('/bbs/').once('value', (res) => {
      this.posts = res.val();
    });
  },
  mounted: function () {
    this.mdcDialog = new MDCDialog(document.getElementById('bbs-dialog'));
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
    },
    openModal: function (event) {
      this.dialogFunc = event.target.getAttribute('data-func');
      this.mdcDialog.show();
    },
  },
  data () {
    return {
      isListPage: true,
      posts: [],
      detailPost: [],
      mdcDialog: {},
      dialogFunc: '',
    }
  },
}
</script>
<template>
  <div>
    <div>
      <p><router-link to="/bbs/list/1">投稿一覧に戻る</router-link></p>
      <h4>{{post.title}}</h4>
      <p>{{post.name}}</p>
      <p>{{post.date}}</p>
      <p class="slf-talign-right">
        <button class="mdc-button mdc-button--raised" data-func="edit" @click="openModal"><i class="material-icons mdc-button__icon">mode_edit</i>Edit</button>
        <button class="mdc-button mdc-button--raised" data-func="delete" @click="openModal"><i class="material-icons mdc-button__icon">delete</i>Delete</button>
      </p>
      <p>{{post.content}}</p>
    </div>
    <aside class="mdc-dialog">
      <div class="mdc-dialog__surface">
        <header class="mdc-dialog__header">
          <h2 class="mdc-dialog__header__title">この投稿を{{dialogFunc === 'edit' ? '編集' : '削除'}}しますか</h2>
        </header>
        <section class="mdc-dialog__body">
          <div class="mdc-text-field">
            <input type="password" class="mdc-text-field__input" required pattern="[0-9]{4}">
            <label class="mdc-text-field__label">Password</label>
            <div class="mdc-line-ripple"></div>
          </div>
          <p class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">4桁の半角数字で入力してください。</p>
        </section>
        <footer class="mdc-dialog__footer">
          <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Cancel</button>
          <button type="button" class="mdc-button mdc-dialog__footer__button" @click="clickSubmit">Submit</button>
        </footer>
      </div>
      <div class="mdc-dialog__backdrop"></div>
    </aside>
  </div>
</template>

<script>
import {MDCDialog} from '@material/dialog';
import {MDCTextField} from '@material/textfield';
import {database} from '@/main.js';

export default {
  beforeCreate: function () {
    document.title = '掲示板 - 一橋バド';
  },
  created: function () {
    database.ref(`/bbs/${this.id}`).once('value', (res) => {
      this.post = res.val();
    });
  },
  mounted: function () {
    this.mdcDialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    this.inputPassword = new MDCTextField(document.querySelector('.mdc-text-field'));
  },
  methods: {
    openModal: function (event) {
      this.dialogFunc = event.target.getAttribute('data-func');
      this.mdcDialog.show();
    },
    clickSubmit: function (event) {
      if (!this.inputPassword.valid || this.inputPassword.value !== this.post.password) {
        return;
      }
      sessionStorage.setItem('id', this.id);
      this.$router.push('/bbs/input');
    },
  },
  data: function () {
    return {
      id: this.$route.params.id,
      post: {},
      mdcDialog: {},
      dialogFunc: '',
      inputPassword: {},
    }
  },
};
</script>
<template>
  <main>
    <article>
      <content-title/>
      <section class="mdc-card">
        <div class="mdc-text-field" id="input-name">
          <input type="text" class="mdc-text-field__input" :value="value.name" required maxlenght="50">
          <label class="mdc-text-field__label">Name</label>
          <div class="mdc-line-ripple"></div>
        </div>
        <p class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">50字以内で入力してください。</p>
        <div class="mdc-text-field" id="input-title">
          <input type="text" class="mdc-text-field__input" :value="value.title" required maxlength="50">
          <label class="mdc-text-field__label">Title</label>
          <div class="mdc-line-ripple"></div>
        </div>
        <p class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">50字以内で入力してください。</p>
        <div class="mdc-text-field mdc-text-field--textarea" id="input-content">
          <textarea class="mdc-text-field__input" rows="10" :value="value.content" required maxlength="2000"></textarea>
          <label class="mdc-text-field__label">Content</label>
        </div>
        <p class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">2000字以内で入力してください。</p>
        <div class="mdc-text-field" id="input-password">
          <input type="password" class="mdc-text-field__input" required pattern="[0-9]{4}">
          <label class="mdc-text-field__label">Password</label>
        </div>
        <p class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">4桁の半角数字で入力してください。</p>
        <div class="slf-talign-center">
          <button class="mdc-button mdc-button--raised" @click="clickPost">投稿</button>
          <button class="mdc-button mdc-button--raised"><router-link to="/bbs/list/1" id="return">戻る</router-link></button>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from '../ContentTitle';
import {database} from '@/main.js';
import {MDCTextField} from '@material/textfield';

export default {
  beforeCreate: function () {
    document.title = '掲示板 - 一橋バド';
  },
  created: function () {
    if (this.id !== null) {
      database.ref(`/bbs/${this.id}`).once('value', (res) => {
        const post = res.val();
        this.value.name = post.name;
        this.value.title = post.title;
        this.value.content = post.content;
      });
      sessionStorage.removeItem('id');
    }
  },
  mounted: function () {
    this.input.name = new MDCTextField(document.getElementById('input-name'));
    this.input.title = new MDCTextField(document.getElementById('input-title'));
    this.input.content = new MDCTextField(document.getElementById('input-content'));
    this.input.password = new MDCTextField(document.getElementById('input-password'));
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      id: sessionStorage.getItem('id'),
      input: {
        name: {}, title: {}, content: {}, password: {},
      },
      value: {
        name: '', title: '', content: '',
      },
    };
  },
  methods: {
    clickPost: function (event) {
      event.target.setAttribute('disabled', '');

      // 入力エラー
      if (!(this.input.name.valid && this.input.title.valid && this.input.content.valid && this.input.password.valid)) {
        event.target.removeAttribute('disabled');
        return;
      }

      this.input.name.disabled = true;
      this.input.title.disabled = true;
      this.input.content.disabled = true;
      this.input.password.disabled = true;

      const date = new Date();
      const format = (num) => {
        return ('00' + num).slice(-2);
      };
      const formatDate = `${date.getFullYear()}/${format(date.getMonth())}/${format(date.getDate())} ${format(date.getHours())}:${format(date.getMinutes())}`;

      const data = {
        name: this.input.name.value,
        date: formatDate,
        title: this.input.title.value,
        content: this.input.content.value,
        password: this.input.password.value,
        delete: false,
      };

      if (this.id === null) {
        database.ref('bbs/').push(data);
      } else {
        let updates = {};
        updates[`bbs/${this.id}`] = data;
        database.ref().update(updates);
      }

      document.getElementById('return').innerHTML = '完了';
    },
  }
};
</script>

<style scoped>
.mdc-text-field {
  width: 100%;
  display: block;
}
</style>
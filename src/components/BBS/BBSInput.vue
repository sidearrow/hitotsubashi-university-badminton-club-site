<template>
  <div>
    <div>
      <div class="mdc-text-field">
        <input type="text" class="mdc-text-field__input" required>
        <label class="mdc-text-field__label">Name</label>
        <div class="mdc-line-ripple"></div>
      </div>
      <div class="mdc-text-field">
        <input type="text" class="mdc-text-field__input" required>
        <label class="mdc-text-field__label">Title</label>
        <div class="mdc-line-ripple"></div>
      </div>
      <div class="mdc-text-field mdc-text-field--textarea" required>
        <textarea class="mdc-text-field__input" rows="10" required></textarea>
        <label class="mdc-text-field__label">Content</label>
      </div>
      <div class="mdc-text-field">
        <input type="password" class="mdc-text-field__input" required>
        <label class="mdc-text-field__label">Password</label>
      </div>
      <div class="slf-talign-center">
        <button class="mdc-button" @click="clickPost">投稿</button>
        <button class="mdc-button"><router-link to="/bbs/list/1" class="text-white">戻る</router-link></button>
      </div>
      <div id="success-msg" class="alert alert-success mt-3 d-none">投稿が完了しました。</div>
      <div id="error-msg" class="alert alert-danger mt-3 d-none">入力エラーがあります。</div>
    </div>
  </div>
</template>

<script>
import {database} from '@/main.js';

import {MDCTextField} from '@material/textfield';

export default {
  mounted: function () {
    document.querySelectorAll('.mdc-text-field').forEach((val) => {
      MDCTextField.attachTo(val);
    });
  },
  methods: {
    clickPost: function (event) {
      event.target.setAttribute('disabled', '');

      let isError = false;

      const name = document.querySelector('input[name=name]').value.trim();
      const title = document.querySelector('input[name=title]').value.trim();
      const content = document.querySelector('textarea[name=content]').value.trim();
      const password = document.querySelector('input[name=password]').value.trim();

      if (name.length === 0 || name.length > 30) {
        document.querySelector('input[name=name]').classList.add('is-invalid');
        isError = true;
      }
      if (title.length === 0 || title.length > 50) {
        document.querySelector('input[name=title]').classList.add('is-invalid');
        isError = true;
      }
      if (content.length === 0 || content.length > 2000) {
        document.querySelector('textarea[name=content]').classList.add('is-invalid');
        isError = true;
      }
      if (password.match(/^\d{4}$/) === null) {
        document.querySelector('input[name=password]').classList.add('is-invalid');
        isError = true;
      }

      // 入力エラー
      if (isError) {
        document.getElementById('error-msg').classList.remove('d-none');
        event.target.removeAttribute('disabled');
        return;
      }

      // 入力成功
      document.getElementById('success-msg').classList.remove('d-none');
      
      const date = new Date();
      const format = (num) => {
        return ('00' + num).slice(-2);
      };
      const formatDate = `${date.getFullYear()}/${format(date.getMonth())}/${format(date.getDate())} ${format(date.getHours())}:${format(date.getMinutes())}`;

      database.ref('bbs/').push({
        name: name,
        date: formatDate,
        title: title,
        content: content,
        password: password,
        delete: false,
      });
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
<template>
  <div>
    <div v-if="!isLogin">
      <div class="input-group">
        <input type="password" class="form-control" placeholder="password">
        <button class="btn append" @click="clickSubmit" id="pass-submit">OK</button>
      </div>
      <div class="alert alert-danger mt-4 d-none" role="alert" id="pass-wrong">
        <span>パスワードが間違っています。再度入力してください。</span>
        <button type="button" class="close" @click="clickClose">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <mizutoricontent v-if="isLogin"></mizutoricontent>
  </div>
</template>

<script>
import MizutoriContent from './MizutoriContent';

export default {
  created: function () {
    this.isLogin = window.sessionStorage.getItem('isLogin') === 'true';
  },
  data () {
    return {
      test: 'aaa',
      isLogin: false,
    }
  },
  components: {
    'mizutoricontent': MizutoriContent,
  },
  methods: {
    'clickSubmit': function (event) {
      event.target.setAttribute('disabled', true);
      const inputPass = document.querySelector('input[type=password]').value;
      if (inputPass === 'password') {
        this.isLogin = true;
        window.sessionStorage.setItem('isLogin', 'true');
      } else {
        document.getElementById('pass-wrong').classList.remove('d-none');
      }
    },
    'clickClose': function (event) {
      document.getElementById('pass-submit').removeAttribute('disabled');
      document.getElementById('pass-wrong').classList.add('d-none');
    },
  }
};
</script>
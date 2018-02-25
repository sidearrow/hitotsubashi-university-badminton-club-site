<template>
  <div>
    <div v-if="!isLogin">
      <div class="mdc-text-field mdc-text-field--with-trailing-icon">
        <input type="password" class="mdc-text-field__input" required>
        <label class="mdc-text-field__label">Password</label>
        <i class="material-icons mdc-text-field__icon">send</i>
      </div>
    </div>
    <mizutoricontent v-if="isLogin"></mizutoricontent>
  </div>
</template>

<script>
import {MDCTextField} from '@material/textfield';
import MizutoriContent from './MizutoriContent';

export default {
  mounted: function () {
    if (!this.isLogin) {
      this.isLogin = window.sessionStorage.getItem('isLogin') === 'true';
      MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
    }
  },
  data () {
    return {
      test: 'aaa',
      isLogin: true,
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
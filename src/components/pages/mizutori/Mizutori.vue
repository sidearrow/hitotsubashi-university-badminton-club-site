<template>
  <div>
    <content-title title="みずとり会"/>

    <!-- 未ログイン -->
    <article v-if="!isLogin">
      <div class="mdc-text-field">
        <label class="mdc-floating-label" for="input-password">Password</label>
        <input type="password" class="mdc-text-field__input" id="input-password">
      </div>
      <button class="mdc-button mdc-button--raised" @click="clickLogin">Login</button>
    </article>

    <!-- ログイン -->
    <article v-else>
      <p>みずとり会会員ページにログインしております。</p>
      <button class="mdc-button mdc-button--raised" @click="clickLogout">Logout</button>
      <mizutori-content/>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import MizutoriContent from '@/components/pages/mizutori/MizutoriContent';
import Config from '@/Config';

import { MDCTextField } from '@material/textfield';

export default {
  mounted () {
    if (!this.isLogin) {
      const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    }
  },
  data () {
    return {
      isLogin: window.sessionStorage.getItem('isLogin') === 'true',
    }
  },
  methods: {
    clickLogin: function () {
      if (document.querySelector('input[type=password]').value === Config.mizutoriPassword) {
        this.isLogin = true;
        window.sessionStorage.setItem('isLogin', 'true');
      }
    },
    clickLogout: function () {
      this.isLogin = false;
      window.sessionStorage.removeItem('isLogin');
    }
  },
  components: {
    'content-title': ContentTitle,
    'mizutori-content': MizutoriContent,
  },
};
</script>
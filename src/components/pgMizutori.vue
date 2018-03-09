<template>
  <main>
    <content-title title="みずとり会"/>
    <article>
      <section class="mdc-card">
        <div v-if="!isLogin">
          <div class="mdc-text-field">
            <input type="password" class="mdc-text-field__input" required>
            <label class="mdc-text-field__label">Password</label>
          </div>
          <i class="material-icons" @click="clickSubmit">send</i>
        </div>
        <mizutoricontent v-if="isLogin"></mizutoricontent>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from './ContentTitle';
import {MDCTextField} from '@material/textfield';
import MizutoriContent from './MizutoriContent';
import config from '@/Config';

export default {
  mounted: function () {
    if (!this.isLogin) {
      this.isLogin = window.sessionStorage.getItem('isLogin') === 'true';
      this.passInput = new MDCTextField(document.querySelector('.mdc-text-field'));
    }
  },
  data () {
    return {
      isLogin: false,
      passInput: {},
    }
  },
  components: {
    'mizutoricontent': MizutoriContent,
    'content-title': ContentTitle,
  },
  methods: {
    'clickSubmit': function (event) {
      if (document.querySelector('input[type=password]').value === config.mizutoriPassword) {
        this.isLogin = true;
        window.sessionStorage.setItem('isLogin', 'true');
      }
    },
  }
};
</script>
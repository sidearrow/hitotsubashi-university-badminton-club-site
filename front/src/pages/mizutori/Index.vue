<template>
<div>
  <h1>みずとり会</h1>
  <div>{{ headerText }}</div>

  <!-- 未ログイン -->
  <cmp-input-password
    v-if="!isLogin"
    @login="login"
  />

  <!-- ログイン -->
  <article v-else>
    <div class="text-right my-3">
      <button
        class="btn btn-secondary"
        @click="clickLogout"
      >ログアウト</button>
    </div>
    <mizutori-content/>
  </article>
</div>
</template>

<script>
import CmpInputPassword from './cmp-input-password'
import CmpPageHeader from '@/components/cmp-page-header'
import MizutoriContent from '@/pages/mizutori/cmp-mizutori-content'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.mizutori
  },
  data () {
    return {
      isLogin: window.sessionStorage.getItem('isLogin') === 'true',
      errorMessages: ['パスワードが間違っています'],
      inputPassword: '',
      headerText: 'みずとり会のページです。',
    }
  },
  methods: {
    login: function () {
      this.isLogin = true;
    },
    clickLogout: function () {
      this.isLogin = false;
      window.sessionStorage.removeItem('isLogin');
      this.headerText = this.headerTextList.noLogin
    }
  },
  components: {
    'cmp-input-password': CmpInputPassword,
    'cmp-page-header': CmpPageHeader,
    'mizutori-content': MizutoriContent,
  },
};
</script>
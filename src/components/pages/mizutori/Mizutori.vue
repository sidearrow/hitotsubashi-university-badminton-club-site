<template>
  <div>
    <content-title title="みずとり会"/>

    <!-- 未ログイン -->
    <article v-if="!isLogin">
      <md-field>
        <label>Password</label>
        <md-input type="password"></md-input>
      </md-field>
      <md-button class="md-raised md-primary" @click="clickLogin">Login</md-button>
    </article>

    <!-- ログイン -->
    <article v-else>
      <p>みずとり会会員ページにログインしております。</p>
      <md-button class="md-raised md-primary" @click="clickLogout">Logout</md-button>
      <mizutori-content/>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import MizutoriContent from '@/components/pages/mizutori/MizutoriContent';
import Config from '@/Config';

export default {
  mounted: function () {
    //if (!this.isLogin) {
    //  this.isLogin = window.sessionStorage.getItem('isLogin') === 'true';
    //}
    console.log(this.isLogin);
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
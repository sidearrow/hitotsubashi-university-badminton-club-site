<template>
  <div>
    <content-title title="みずとり会" :items="titleItems"/>

    <!-- 未ログイン -->
    <article v-if="!isLogin">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Password</span>
        </div>
        <input type="password" class="form-control" id="input-password">
        <div class="input-group-append">
          <button class="btn bg-main text-white" @click="clickLogin">Login</button>
        </div>
      </div>
    </article>

    <!-- ログイン -->
    <article v-else>
      <p>
        <span>みずとり会会員ページにログインしております。</span>
        <button class="btn bg-main text-white" @click="clickLogout">Logout</button>
      </p>
      <mizutori-content/>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import MizutoriContent from '@/components/pages/mizutori/MizutoriContent';
import config from '@/config';
import { getPassword } from '@/database';

export default {
  data () {
    return {
      titleItems: [config.pageList.mizutori],
      isLogin: window.sessionStorage.getItem('isLogin') === 'true',
    }
  },
  methods: {
    clickLogin: function () {
      getPassword((res) => {
        if (document.querySelector('input[type=password]').value === res.password) {
          this.isLogin = true;
          window.sessionStorage.setItem('isLogin', 'true');
        }
      })
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
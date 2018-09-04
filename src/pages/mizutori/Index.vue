<template>
  <div>
    <content-title title="みずとり会" :items="titleItems"/>

    <!-- 未ログイン -->
    <article v-if="!isLogin">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Password</span>
        </div>
        <input type="password" class="form-control" v-model="inputPassword">
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
import axios from 'axios'
import { buildUrl } from '@/util'
import ContentTitle from '@/components/ContentTitle'
import MizutoriContent from '@/pages/mizutori/MizutoriContent'
import config from '@/config'

export default {
  data () {
    return {
      titleItems: [config.pageList.mizutori],
      isLogin: window.sessionStorage.getItem('isLogin') === 'true',
      inputPassword: '',
    }
  },
  methods: {
    clickLogin: function () {
      axios.get(buildUrl('mizutori'), {password: this.inputPassword}).then((res) => {
        console.log(res)
        window.sessionStorage.setItem('isLogin', 'true')
        this.isLogin = true;
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
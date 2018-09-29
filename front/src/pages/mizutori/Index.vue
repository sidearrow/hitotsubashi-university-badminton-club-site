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
      <div v-if="isError" class="alert alert-danger mt-3">パスワードが間違っています。</div>
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
import xhr from '@/xhr'
import ContentTitle from '@/components/ContentTitle'
import MizutoriContent from '@/pages/mizutori/MizutoriContent'
import config from '@/config'

export default {
  data () {
    return {
      titleItems: [config.pageList.mizutori],
      isLogin: window.sessionStorage.getItem('isLogin') === 'true',
      isError: false,
      inputPassword: '',
    }
  },
  methods: {
    clickLogin: function () {
      this.$http
        .get(
          `${this.$config.apiUrlBase}/mizutori`,
          {params: {password: this.inputPassword}}
        )
        .then((res) => {
          if (!res.data.auth) {
            this.isError = true
            return
          }
          this.isError = false
          this.isLogin = true
          window.sessionStorage.setItem('isLogin', 'true')
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
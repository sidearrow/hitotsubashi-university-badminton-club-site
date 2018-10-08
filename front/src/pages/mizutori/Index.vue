<template>
  <div>
    <cmp-page-header
      title="みずとり会"
      :text="headerText"
    />

    <!-- 未ログイン -->
    <article v-if="!isLogin">
      <v-text-field
        v-model="inputPassword"
        label="パスワード"
        type="password"
        append-outer-icon="send"
        @click:append-outer="clickLogin"
        :error="isError"
        :error-messages="isError ? errorMessages : []"
      ></v-text-field>
    </article>

    <!-- ログイン -->
    <article v-else>
      <p>
        <v-btn
          outline
          color="primary"
          @click="clickLogout"
        >Logout</v-btn>
      </p>
      <mizutori-content/>
    </article>
  </div>
</template>

<script>
import CmpPageHeader from '@/components/cmp-page-header'
import MizutoriContent from '@/pages/mizutori/cmp-mizutori-content'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.mizutori
  },
  created: function () {
    if (this.isLogin) {
      this.headerText = this.headerTextList.login
    } else {
      this.headerText = this.headerTextList.noLogin
    }
  },
  data () {
    return {
      isLogin: window.sessionStorage.getItem('isLogin') === 'true',
      isError: false,
      errorMessages: ['パスワードが間違っています'],
      inputPassword: '',
      headerText: '',
      headerTextList: {
        noLogin: 'みずとり会のページです。コンテンツを見るにはログインをして下さい。',
        login: 'みずとり会のページです。',
      }
    }
  },
  methods: {
    clickLogin: function () {
      this.$http
        .get(
          '/mizutori',
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
          this.headerText = this.headerTextList.login
        })
    },
    clickLogout: function () {
      this.isLogin = false;
      window.sessionStorage.removeItem('isLogin');
      this.headerText = this.headerTextList.noLogin
    }
  },
  components: {
    'cmp-page-header': CmpPageHeader,
    'mizutori-content': MizutoriContent,
  },
};
</script>
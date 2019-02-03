<template>
<div>
  <h1>みずとり会</h1>
  <div>みずとり会のページです</div>

  <article>
    <div class="text-right my-3">
      <button
        class="btn btn-outline-secondary"
        @click="clickLogout"
      >ログアウト</button>
    </div>
    <div>
      <div class="h3">OB通信</div>
      <table class="table">
        <tr v-for="(obMessageEachY, iY) in obMessages" :key="iY">
          <td>{{ obMessageEachY.year }}</td>
          <td>
            <span
              v-for="(obMessageEachM, iM) in obMessageEachY.data" :key="iM"
              class="ml-2 d-inline-block"
            >
              <a target="__blank" :href="obMessageEachM.url">{{ obMessageEachM.name }}</a>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </article>
</div>
</template>

<script>
export default {
  beforeCreate: function () {
    document.title = this.$config.title.mizutori
  },
  created: function () {
    this.$http.get('/mizutori/obmsg')
    .then((res) => {
      this.obMessages = res.data
    })
  },
  data: function () {
    return {
      obMessages: {}
    }
  },
  methods: {
    clickLogout: function () {
      window.sessionStorage.removeItem('mizutori-login-token')
      this.$router.push('/mizutori/login')
    }
  },
};
</script>
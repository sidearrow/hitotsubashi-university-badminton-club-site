<template>
<div>
  <cmp-page-title title="みずとり会" />
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
        <tr v-for="(obmsgsYear, _) in obmsgs.list" :key="_">
          <td>{{ obmsgsYear.year }}</td>
          <td>
            <span
              v-for="(obmsgMonth, _) in obmsgsYear.month" :key="_"
              class="ml-2 d-inline-block"
            >
              <a target="__blank" :href="obmsgs.getHref(obmsgsYear.year, obmsgMonth)">{{ obmsgs.getName(obmsgsYear.year, obmsgMonth) }}</a>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </article>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.mizutori
  },
  data: function () {
    return {
      obmsgs: this.$config.obmsg
    }
  },
  methods: {
    clickLogout: function () {
      window.sessionStorage.removeItem('mizutori-login-token')
      this.$router.push('/mizutori/login')
    }
  },
  components: {
    'cmp-page-title': cmpPageTitle,
  }
};
</script>
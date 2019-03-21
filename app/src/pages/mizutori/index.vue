<template>
<div>
  <cmp-page-title title="みずとり会" />

  <cmp-login v-if="!isLogin"
             @done-login="doneLogin"/>

  <article v-else>
    <div class="text-right my-3">
      <button class="btn btn-outline-secondary"
              @click="clickLogout">ログアウト</button>
    </div>
    <div>
      <div class="h3">OB通信</div>
      <table class="table table-bordered">
        <tr v-for="(obmsgsYear, _) in obmsgs.list" :key="_">
          <td class="bg-light text-center">{{ obmsgsYear.year }}</td>
          <td>
            <span v-for="(obmsgMonth, _) in obmsgsYear.month" :key="_"
                  class="ml-2 d-inline-block">
              <a target="__blank"
                 :href="obmsgs.getHref(obmsgsYear.year, obmsgMonth)">{{ obmsgs.getName(obmsgsYear.year, obmsgMonth) }}</a>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </article>
</div>
</template>

<script>
import cmpLogin from './cmp-login'
import cmpPageTitle from '@/components/cmp-page-title'

const _components = {
  'cmp-login'     : cmpLogin,
  'cmp-page-title': cmpPageTitle,
}

export default {
  components: _components,
  beforeCreate: function () {
    document.title = this.$config.title.mizutori
  },
  data: function () {
    return {
      isLogin: false,
      obmsgs: this.$config.obmsg
    }
  },
  methods: {
    clickLogout: function () {
      this.isLogin = false
    },
    doneLogin: function () {
      this.isLogin = true
    },
  },
};
</script>

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
      <div class="row my-2" v-for="(obmsgsYear, _) in obmsgs.list" :key="_">
        <div class="bg-light col-sm-2 py-2 font-weight-bold">{{ obmsgsYear.year }}</div>
        <div class="col-sm-10">
          <button class="btn btn-sm btn-outline-primary mr-2 my-1"
                  v-for="(obmsgMonth, _) in obmsgsYear.month" :key="_"
                  @click="openObmsg(obmsgs.getPath(obmsgsYear.year, obmsgMonth))">{{ obmsgs.getName(obmsgsYear.year, obmsgMonth) }}</button>
        </div>
      </div>
    </div>
  </article>
</div>
</template>

<script>
import firebaseConfig from '@/firebase-config'
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
    doneLogin: async function () {
      this.isLogin = true
    },
  },
};
</script>

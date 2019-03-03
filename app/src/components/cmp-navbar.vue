<template>
<div>
  <nav class="navbar bg-white fixed-top border-bottom border-dark">
    <router-link class="navbar-brand" to="/">
      <img src="/static/img/logo.jpg" height="52px" class="align-bottom mr-3">
      <span class="d-inline-block text-dark">一橋大学<br>バドミントン部</span>
    </router-link>
    <div class="dropdown">
      <a class="btn btn-transpalent dropdown-toggle"
         @click="toggle()"
      >MENU</a>
      <div :class="'dropdown-menu dropdown-menu-right' + (isShow ? ' show' : '')">
        <router-link v-for="(menu, key) in menuList" :key="key"
                     class="dropdown-item"
                     :to="menu.href"
                     @click.native="toggle()"
        >{{ menu.text }}</router-link>
        <div class="dropdown-divider"></div>
        <router-link to="/manage"
                     class="dropdown-item"
                     @click.native="toggle()"
        >管理者はこちら</router-link>
      </div>
    </div>
    <!---
    <v-btn
      icon
      href="https://twitter.com/hit_u_bad"
      target="__blank"
    >
      <v-icon>mdi-twitter-circle</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://github.com/sidearrow/hit-u-bad"
      target="__blank"
    >
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>
    -->
  </nav>
</div>
</template>

<script>
export default {
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
    }
  },
  data: function () {
    return {
      isShow: false,
      menuList: [
        { text: 'ホーム', href: this.$config.url.top },
        { text: '部員紹介', href: this.$config.url.member },
        { text: '大会結果', href: this.$config.url.result },
        { text: '三多摩大会', href: this.$config.url.santama },
        { text: '掲示板', href: this.$config.url.bbs },
        { text: 'みずとり会', href: this.$config.url.mizutori},
      ]
    }
  }
}
</script>
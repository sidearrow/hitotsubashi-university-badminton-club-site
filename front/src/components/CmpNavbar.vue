<template>
  <nav class="navbar border-bottom border-secondary navbar-light bg-transparent navbar-expand-md">
    <router-link class="navbar-brand" to="/">
      一橋大学
      <br />バドミントン部
    </router-link>
    <button type="button" class="border-0 navbar-toggler" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="'ml-md-3 navbar-collapse collapse' + (isShowMenu ? ' show' : '')">
      <ul class="navbar-nav">
        <li v-for="(menu, i) in menus" :key="i" class="navbar-item">
          <router-link :to="menu.path" class="nav-link" @click="toggleMenu">{{ menu.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

type Menu = {
  text: string,
  path: string,
}

const menus: Menu[] = [
  { text: '部活情報', path: '/about' },
  { text: '部員情報', path: '/member' },
  { text: '大会結果', path: '/result' },
  { text: '三多摩大会', path: '/santama' },
  { text: '掲示板', path: '/bbs' },
  { text: 'みずとり会', path: '/mizutori' },
]

export default Vue.extend({
  data: () => ({
    menus: menus,
    isShowMenu: false,
  }),
  methods: {
    toggleMenu: function () {
      this.isShowMenu = !this.isShowMenu;
    }
  },
});
</script>

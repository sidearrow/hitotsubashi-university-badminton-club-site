<template>
  <nav class="navbar border-bottom border-secondary navbar-light bg-transparent navbar-expand-md">
    <router-link class="navbar-brand" to="/" style="line-height: 1.3">
      <span>一橋大学</span>
      <br />
      <span>バドミントン部</span>
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
    <ul class="ml-auto mt-md-0 mt-2 navbar-nav">
      <li>
        <a target="_blank" href="https://twitter.com/hit_u_bad" class="nav-link">
          <i class="icon-twitter font-size--1_5"></i>
          <span class="ml-2 font-size--1_1 align-top">Twitter</span>
        </a>
      </li>
      <!--
        <b-nav-item target="_blank" href="https://github.com/sidearrow/hit-u-bad">
          <i class="icon-github font-size--1_5"></i>
          <span class="ml-2 font-size--1_1 align-top">GitHub</span>
        </b-nav-item>
      -->
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

type Menu = {
  text: string;
  path: string;
};

const menus: Menu[] = [
  { text: "部活情報", path: "/about" },
  { text: "部員情報", path: "/members" },
  { text: "大会結果", path: "/results" },
  { text: "三多摩大会", path: "/santama" },
  { text: "掲示板", path: "/bbs" },
  { text: "みずとり会", path: "/mizutori" }
];

export default Vue.extend({
  data: () => ({
    menus: menus,
    isShowMenu: false
  }),
  methods: {
    toggleMenu: function() {
      this.isShowMenu = !this.isShowMenu;
    }
  }
});
</script>

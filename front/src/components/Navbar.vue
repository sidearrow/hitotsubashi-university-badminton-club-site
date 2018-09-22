<template>
  <nav class="navbar bg-main mb-3">
    <span class="navbar-brand text-white">
      <span>一橋大学バドミントン部</span><br/>
      <small style="font-size:0.85rem">Hitotsubashi Univ. Badminton Club</small>
    </span>
    <div class="dropdown">
      <button class="btn dropdown-toggle bg-main text-white" @click="toggleMenu"></button>
      <div class="dropdown-menu dropdown-menu-right" id="menu">
        <router-link
          v-for="(v, i) in menuItems" :key="i"
          class="dropdown-item"
          :to="v[1]"
          @click.native="toggleMenu"
        >{{ v[0] }}</router-link>
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item" to="/manage">Manage</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import config from '@/config'

export default {
  methods: {
    toggleMenu: function () {
      const target = document.getElementById('menu');
      if (target.classList.contains('show')) {
        target.classList.remove('show');
      } else {
        target.classList.add('show');
      }
    }
  },
  data: function () {
    return {
      menuItems: [
        config.pageList.top,
        config.pageList.member,
        config.pageList.result,
        config.pageList.santama,
        config.pageList.bbs,
        config.pageList.mizutori,
      ],
    }
  }
}
</script>
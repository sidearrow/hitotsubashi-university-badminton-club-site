<template>
  <nav class="navbar bg-main mb-3">
    <span class="navbar-brand text-white">Hitotsubashi Badminton Club</span>
    <div class="dropdown">
      <button class="btn dropdown-toggle bg-main text-white" @click="toggleMenu">Menu</button>
      <div class="dropdown-menu dropdown-menu-right" id="menu">
        <router-link
          v-for="v in menuItems"
          class="dropdown-item"
          :to="v.href"
          @click.native="toggleMenu"
        >{{ v.text }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
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
        { text: 'TOP',      href: '/' },
        { text: 'Member',   href: '/member' },
        { text: 'Result',   href: '/result' },
        { text: 'Santama',  href: '/santama' },
        { text: 'BBS',      href: '/bbs' },
        { text: 'Mizutori', href: '/mizutori' },
      ],
    }
  }
}
</script>
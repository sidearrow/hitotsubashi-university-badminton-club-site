<template>
<div>
  <nav class="navbar border-bottom border-dark">
    <span class="navbar-brand">一橋バド 管理画面</span>
    <div>
      <div class="dropdown d-inline-block mr-2">
        <button @click="toggleMenu"
                class="btn btn-transparent dropdown-toggle"></button>
        <div :class="'dropdown-menu dropdown-menu-right' + (isMenuShow ? ' show' : '')">
          <router-link class="dropdown-item"
                       v-for="(menu, key) in menuList" :key="key"
                       :to="menu.href"
          >{{ menu.text }}</router-link>
        </div>
      </div>
      <button class="btn btn-sm btn-outline-dark" @click="clickLogout()">ログアウト</button>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  methods: {
    toggleMenu: function () {
      this.isMenuShow = !this.isMenuShow
    },
    clickLogout: function () {
      this.$store.commit('logoutManage')
      this.$router.push('/manage/login')
    }
  },
  data: function () {
    return {
      isMenuShow: false,
      menuList: [
        { text: 'OB通信', href: '/manage/obmsg' }
      ]
    }
  }
}
</script>
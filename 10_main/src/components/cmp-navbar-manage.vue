<template>
<div>
  <nav class="navbar border-bottom border-dark">
    <span class="navbar-brand">一橋バド 管理画面</span>
    <button class="btn btn-sm btn-outline-dark" @click="clickLogout()">ログアウト</button>
  </nav>
</div>
</template>

<script>
export default {
  methods: {
    clickLogout: function () {
      this.$store.commit('logoutManage')
      this.$router.push('/manage/login')
    }
  }
}
</script>
<template>
  <div>
    <slf-cmp-navbar/>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import AppMenuContent from '@/components/AppMenuContent';

export default {
  components: {
    'slf-cmp-navbar': Navbar,
    'slf-app-menu-content': AppMenuContent,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
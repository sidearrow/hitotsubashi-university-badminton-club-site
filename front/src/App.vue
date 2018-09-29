<template>
  <div>
    <cmp-navbar/>
    <main class="container mb-5">
      <router-view/>
    </main>
  </div>
</template>

<script>
import CmpNavbar from '@/components/cmp-navbar';
import CmpAppMenuContent from '@/components/cmp-app-menu-content';

export default {
  components: {
    'cmp-navbar': CmpNavbar,
    'cmp-app-menu-content': CmpAppMenuContent,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
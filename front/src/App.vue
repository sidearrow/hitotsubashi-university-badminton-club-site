<template>
  <div>
    <cmp-header/>
    <main class="container mb-5">
      <router-view/>
    </main>
  </div>
</template>

<script>
import cmpHeader from '@/components/header/index';
import CmpAppMenuContent from '@/components/cmp-app-menu-content';

export default {
  components: {
    'cmp-header': cmpHeader,
    'cmp-app-menu-content': CmpAppMenuContent,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
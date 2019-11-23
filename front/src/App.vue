<template>
<body>
  <header>
    <cmp-navbar />
  </header>
  <main class="container" style="max-width: 720px">
    <div class="py-5">
      <router-view />
    </div>
  </main>
  <footer>(C) 2019 一橋大学バドミントン部</footer>
</body>
</template>

<script lang="ts">
import Vue from 'vue'
import CmpNavbar from "./components/CmpNavbar.vue";

export default Vue.extend({
  components: {
    'cmp-navbar': CmpNavbar,
  }
})
</script>

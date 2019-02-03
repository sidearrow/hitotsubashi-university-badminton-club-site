<template>
<div>
  <nav class="navbar bg-main fixed-top text-white">
    <span class="navbar-brand">一橋バド</span>
    <cmp-menu ref="cmpMenu"></cmp-menu>
    <!---
    <v-btn
      icon
      href="https://twitter.com/hit_u_bad"
      target="__blank"
    >
      <v-icon>mdi-twitter-circle</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://github.com/sidearrow/hit-u-bad"
      target="__blank"
    >
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>
    -->
  </nav>
</div>
</template>

<script>
import cmpMenu from './cmp-navbar-menu'

export default {
  components: {
    'cmp-menu': cmpMenu,
  }
}
</script>
<template>
<div>
  <nav class="navbar bg-main navbar-dark d-none d-md-block">
    <router-link
      to="/"
      class="navbar-brand"
    >Hitotsubashi Univ. Badminton Club</router-link>
  </nav>
  <nav class="navbar bg-main navbar-dark d-md-none">
    <router-link
      to="/"
      class="navbar-brand"
      style="font-size:0.8rem"
    >Hitotsubashi Univ.<br/>Badminton Club</router-link>
    <button
      class="navbar-toggler"
      @click="$refs.cmpMenu.toggle()"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
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
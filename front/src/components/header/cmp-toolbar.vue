<template>
  <v-toolbar
    dark
    color="primary"
    app
    fixed
  >
    <v-toolbar-side-icon
      @click="toggleMenu"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Hitotsubashi Univ. Badminton Club</v-toolbar-title>
    <v-spacer></v-spacer>
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
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    toggleMenu: function () {
      this.$emit('toggle-menu')
    }
  },
}
</script>
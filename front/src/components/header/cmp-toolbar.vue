<template>
  <v-toolbar
    dark
    :color="$vuetify.theme.primary"
    app
  >
    <v-toolbar-side-icon
      @click="toggleMenu"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Hitotsubashi Univ. Badminton Club</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
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
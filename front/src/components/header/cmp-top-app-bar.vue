<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a class="material-icons mdc-top-app-bar__navigation-icon"
           @click="toggleMenu"
        >menu</a>
        <span class="mdc-top-app-bar__title">Hitotsubashi Univ. Badminton Club</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <a href="https://twitter.com/hit_u_bad" target="__blank">
          <img width="40px" src="/static/img/twitter_logo.svg">
        </a>
      </section>
    </div>
  </header>
</template>

<script>
//import { MDCTopAppBar } from '@material/top-app-bar/index'

export default {
  methods: {
    toggleMenu: function () {
      this.$emit('toggle-menu')
    }
  },
}
</script>
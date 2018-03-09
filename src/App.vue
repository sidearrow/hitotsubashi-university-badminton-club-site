<template>
  <div>
    <nav-bar/>
    <router-view/>
    <!--<slf-footer/>-->
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  components: {
    'nav-bar': NavBar,
    'slf-footer': Footer,
  },
}
</script>

<style lang="sass">
@import './assets/style';
</style>
<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  components: {
    Header: Header,
  },
}
</script>

<style lang="sass">
@import './assets/style';
</style>
<template>
  <div>
    <cmp-drawer
      ref="cmpDrawer"
    />
    <cmp-top-app-bar
      @toggle-menu="toggleMenu"
    />
  </div>
</template>

<script>
import cmpTopAppBar from './cmp-top-app-bar'
import cmpDrawer from './cmp-drawer'

export default {
  methods: {
    toggleMenu: function () {
      this.$refs.cmpDrawer.toggle()
    }
  },
  components: {
    'cmp-top-app-bar': cmpTopAppBar,
    'cmp-drawer': cmpDrawer
  }
}
</script>
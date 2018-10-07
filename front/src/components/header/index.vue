<template>
  <div>
    <cmp-drawer
      ref="cmpDrawer"
    />
    <cmp-toolbar
      @toggle-menu="toggleMenu"
    />
  </div>
</template>

<script>
import cmpToolbar from './cmp-toolbar'
import cmpDrawer from './cmp-drawer'

export default {
  methods: {
    toggleMenu: function () {
      this.$refs.cmpDrawer.toggle()
    }
  },
  components: {
    'cmp-toolbar': cmpToolbar,
    'cmp-drawer': cmpDrawer
  }
}
</script>
<template>
  <div>
    <cmp-header/>
    <div class="container-fluid mt-3">
      <div v-if="isIndex">
        <router-view></router-view>
      </div>
      <div
        v-else
        class="row"
      >
        <div class="col-md-3 col-xl-2 d-none d-md-block">
          <cmp-sidebar></cmp-sidebar>
        </div>
        <div class="col-md-9 col-xl-10 mb-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <cmp-footer/>
  </div>
</template>

<script>
import cmpHeader from '@/components/cmp-navbar'
import cmpSidebar from '@/components/cmp-sidebar'
import cmpFooter from '@/components/cmp-footer'

export default {
  data: function () {
    return {
      isIndex: this.$route.path === '/',
    }
  },
  components: {
    'cmp-header': cmpHeader,
    'cmp-sidebar': cmpSidebar,
    'cmp-footer': cmpFooter,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
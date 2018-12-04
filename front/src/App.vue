<template>
  <div>
    <cmp-header/>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-md-3 col-xl-2 d-none d-md-block">
          <cmp-sidebar></cmp-sidebar>
        </div>
        <div class="col-md-9 col-xl-10 mb-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cmpHeader from '@/components/cmp-navbar'
import cmpSidebar from '@/components/cmp-sidebar'

export default {
  components: {
    'cmp-header': cmpHeader,
    'cmp-sidebar': cmpSidebar,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
<template>
  <div>
    <cmp-header/>
    <div class="container-fluid" style="margin-top:5rem">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5 px-0">
        <router-view></router-view>
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
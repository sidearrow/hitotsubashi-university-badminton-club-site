<template>
<div>
  <cmp-header/>
  <div class="container mb-5" style="max-width:720px;margin-top:100px">
    <router-view></router-view>
  </div>
  <cmp-footer/>

<!--
  <div>
    <div class="modal fade show"></div>
    <div class="modal-backdrop fade show"></div>
  </div>
  -->
</div>
</template>

<script>
import cmpHeader from '@/components/cmp-navbar'
import cmpFooter from '@/components/cmp-footer'

export default {
  components: {
    'cmp-header': cmpHeader,
    'cmp-footer': cmpFooter,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>

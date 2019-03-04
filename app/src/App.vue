<template>
<div>
  <cmp-header/>
  <div class="container mb-5" style="max-width:720px;margin-top:100px">
    <router-view></router-view>
  </div>
  <cmp-footer/>
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
  watch: {
    '$route': function () {
      this.isManagePage = this.$route.path !== '/manage/login' &&
                          this.$route.path.split('/')[1] === 'manage'
    }
  },
  data: function () {
    return {
      isManagePage: this.$route.path !== '/manage/login' &&
                    this.$route.path.split('/')[1] === 'manage'
    }
  }
}
</script>

<style lang="scss">
@import './assets/style';
</style>
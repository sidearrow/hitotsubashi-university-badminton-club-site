<template>
<div>
<!-- 一般画面 -->
<template v-if="!isManagePage">
  <cmp-header/>
  <div class="container-fluid" style="margin-top:5rem">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5 px-0">
      <router-view></router-view>
    </div>
  </div>
  <cmp-footer/>
</template>

<!-- 管理画面 -->
<template v-else>
  <cmp-header-manage />
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>
</div>

</template>

<script>
import cmpHeader from '@/components/cmp-navbar'
import cmpHeaderManage from '@/components/cmp-navbar-manage'
import cmpFooter from '@/components/cmp-footer'

export default {
  components: {
    'cmp-header': cmpHeader,
    'cmp-header-manage': cmpHeaderManage,
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
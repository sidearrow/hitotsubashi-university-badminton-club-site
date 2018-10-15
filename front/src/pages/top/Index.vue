<template>
  <div>
    <div class="mb-5">
      <h1 class="display-3 primary--text mb-3">一橋大学<br/>体育会<br/>バドミントン部</h1>
      <p class="title secondary--text font-weight-thin">Hitotsubashi University Badminton Club was established in 1952.</p>
    </div>
    <v-alert
      outline
      :value="true"
      color="warning"
      icon="priority_high"
      class="mb-3 font-weight-bold"
    >
      <span>こちらは β 版になります。</span>
      <br/>
      <span>最新の情報は <a href="http://jfn.josuikai.net/circle/sports/badminton/" target="__blank">こちら</a> からご確認下さい。</span>
    </v-alert>
    <slf-cmp-carousel/>
  </div>
</template>

<script>
import CmpCarousel from '@/pages/top/cmp-carousel'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.top
  },
  components: {
    'slf-cmp-carousel': CmpCarousel,
  }
};
</script>
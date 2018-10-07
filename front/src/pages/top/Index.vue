<template>
  <div style="width:100%">
    <v-alert
      :value="true"
      color="warning"
      icon="priority_high"
      outline
      class="mb-3"
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
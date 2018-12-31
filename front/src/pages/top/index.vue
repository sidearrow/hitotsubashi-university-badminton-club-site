<template>
  <div>
    <div class="alert alert-warning">
      <span>こちらは β 版になります。</span>
      <br/>
      <span>最新の情報は <a href="http://jfn.josuikai.net/circle/sports/badminton/" target="__blank">こちら</a> からご確認下さい。</span>
    </div>
    <cmp-jumbotoron/>
    <!-- <cmp-carousel/> -->
    <div class="row">
      <div class="col-lg-4 text-center">
        <h2>部員紹介</h2>
      </div>
    </div>
  </div>
</template>

<script>
import cmpJumbotron from './cmp-jumbotron'
import cmpCarousel from './cmp-carousel'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.top
  },
  components: {
    'cmp-jumbotoron': cmpJumbotron,
    'cmp-carousel': cmpCarousel,
  }
};
</script>
<template>
  <div>
    <cmp-jumbotoron/>
    <cmp-carousel/>
    <div class="alert alert-warning">
      <span>こちらは β 版になります。</span>
      <br/>
      <span>最新の情報は <a href="http://jfn.josuikai.net/circle/sports/badminton/" target="__blank">こちら</a> からご確認下さい。</span>
    </div>
    <cmp-twitter/>
  </div>
</template>

<script>
import cmpJumbotron from './cmp-jumbotron'
import cmpCarousel from './cmp-carousel'
import cmpTwitter from './cmp-twitter'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.top
  },
  components: {
    'cmp-jumbotoron': cmpJumbotron,
    'cmp-carousel': cmpCarousel,
    'cmp-twitter': cmpTwitter,
  }
};
</script>
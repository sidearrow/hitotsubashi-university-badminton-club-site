<template>
  <div>
    <div class="alert alert-warning">
      <span>こちらはβ版になります。</span>
      <br/>
      <span>最新の情報は<a href="http://jfn.josuikai.net/circle/sports/badminton/" target="__blank">こちら</a>からご確認下さい。</span>
    </div>
    <slf-cmp-top-carousel/>
    <div class="jumbotron mt-3">
      <p>
        <span>2017年7月現在、私達一橋大学バドミントン部は男子24名、女子7名の計31名で活動しています。</span>
        <br/>
        <span>男女・経験者大学始め関係なく、リーグ戦での4部への昇格を目指して日々練習に励んでいます。</span>
      </p>
    </div>
  </div>
</template>

<script>
import Carousel from '@/pages/top/cmp-carousel'

export default {
  beforeCreate: function () {
    document.title = 'TOP - 一橋バド';
  },
  components: {
    'slf-cmp-top-carousel': Carousel,
  }
};
</script>
<template>
  <div>
    <slf-cmp-top-carousel/>
    <div class="jumbotron mt-3">
      <h1 class="text-nowrap">一橋大学<wbr>バドミントン部</h1>
      <hr class="my-4">
      <p>2017年7月現在、私達一橋大学バドミントン部は男子24名、女子7名の計31名で活動しています。<br/>
男女・経験者大学始め関係なく、リーグ戦での4部への昇格を目指して日々練習に励んでいます。</p>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  beforeCreate: function () {
    document.title = 'TOP - 一橋バド';
  },
  components: {
    'slf-cmp-top-carousel': Carousel,
  }
};
</script>
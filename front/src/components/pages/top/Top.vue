<template>
  <div>
    <slf-cmp-top-carousel/>
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
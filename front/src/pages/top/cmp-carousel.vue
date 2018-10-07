<template>
  <v-carousel
    id="slf-carousel"
    hide-delimiters
  >
    <v-carousel-item
      v-for="i in 3"
      :key="i"
      :src="'/static/img/topimage' + i + '.jpg'"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  mounted: function () {
    const carousel = document.getElementById('slf-carousel')
    carousel.style.height = carousel.offsetWidth * 3 / 4 + 'px'
  },
}
</script>
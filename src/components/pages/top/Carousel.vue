<template>
  <div>
    <div class="carousel slide">
      <div class="carousel-inner">
        <div
          v-for="i in 3"
          :class="'carousel-item' + ((i === 1) ? ' active' : '')"
          :id="`img-${i}`"
        >
          <img
            class="d-block w-100"
            :src="'/static/img/topimage' + i + '.jpg'"
          >
        </div>
      </div>
      <a class="carousel-control-prev" @click="clickCarousel(-1)">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" @click="clickCarousel(1)">
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickCarousel: function (num) {
      document.getElementById(`img-${this.carouselActive}`).classList.remove('active');
      this.carouselActive += num;
      if (this.carouselActive === 0) {
        this.carouselActive = 3;
      }
      if (this.carouselActive >= 4) {
        this.carouselActive = 1;
      }
      document.getElementById(`img-${this.carouselActive}`).classList.add('active');
    }
  },
  data: function () {
    return {
      carouselActive: 1,
    }
  }
}
</script>
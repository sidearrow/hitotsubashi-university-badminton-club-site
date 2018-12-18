<template>
  <div class="carousel slide">
    <div class="carousel-inner">
      <div
        v-for="i in imgNum"
        :key="i"
        :class="'carousel-item' + ((i === active) ? ' active': '')"
      >
        <img
          class="d-block w-100"
          :src="'/static/img/topimage' + i + '.jpg'"
        >
      </div>
      <a
        class="carousel-control-prev"
        @click="clickControl(-1)"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        @click="clickControl(1)"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickControl: function (num) {
      if (this.active + num === 0) {
        this.active = this.imgNum
      } else if (this.active + num > this.imgNum) {
        this.active = 1
      } else {
        this.active += num
      }
    }
  },
  data: function () {
    return {
      active: 1,
      imgNum: 3,
    }
  }
}
</script>
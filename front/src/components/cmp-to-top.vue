<template>
<div class="fixed-bottom p-3 p-sm-5 text-right" v-if="isShow">
  <button
    class="btn btn-sm btn-outline-secondary text-center"
    @click="click"
  >
    <i class="fas fa-angle-up"></i>
  </button>
</div>
</template>

<script>
export default {
  methods: {
    click: function () {
      document.documentElement.scrollTop = 0
    }
  },
  data: function () {
    return {
      isShow: true
    }
  }
}
</script>
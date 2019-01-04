<template>
  <div>
    <div class="h3">OB通信</div>
    <cmpNowLoading v-if="isNowLoading"/>
    <div
      v-else
      v-for="(v1, i1) in obmsg" :key="i1"
      class="row mb-2"
    >
      <div class="col-auto">{{ v1.year }}年</div>
      <div class="col">
        <span
          v-for="(v2, i2) in v1.data" :key="i2"
          class="mr-2 d-inline-block"
        >
          <a target="__blank" :href="v2.url">{{ v2.name }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import cmpNowLoading from '@/components/cmp-now-loading'

export default {
  created: function () {
    this.$http.get(
      '/mizutori/obmsg'
    )
    .then((res) => {
      this.isNowLoading = false
      this.obmsg = res.data
    })
  },
  data: function () {
    return {
      isNowLoading: true,
      obmsg: {},
    }
  },
  components: {
    cmpNowLoading: cmpNowLoading,
  }
};
</script>
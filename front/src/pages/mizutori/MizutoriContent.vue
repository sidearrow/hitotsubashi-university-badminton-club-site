<template>
  <div>
    <h2 class="h2">OB通信</h2>
    <cmpNowLoading v-if="isNowLoading"/>
    <section
      v-else
      v-for="(v1, i1) in obmsg" :key="i1"
    >
      <h3 class="h5">{{ v1.year }}年</h3>
      <div class="mb-3">
        <span
          v-for="(v2, i2) in v1.data" :key="i2"
          class="mr-2 d-inline-block"
        >
          <a target="__blank" :href="v2.url">{{ v2.name }}</a>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import xhr from '@/xhr'
import cmpNowLoading from '@/components/NowLoading'

export default {
  created: function () {
    xhr.get('/api/mizutori/obmsg', null, (res) => {
      this.isNowLoading = false
      this.obmsg = res
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
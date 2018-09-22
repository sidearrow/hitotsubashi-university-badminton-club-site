<template>
  <div>
    <h2 class="h2">OB通信</h2>
    <cmpNowLoading v-if="isNowLoading"/>
    <template v-else v-for="v1 in obmsg">
      <h3 class="h5">{{ v1.year }}年</h3>
      <div class="mb-3">
        <span v-for="v2 in v1.data" class="mr-2 d-inline-block">
          <a target="__blank" :href="v2.url">{{ v2.name }}</a>
        </span>
      </div>
    </template>
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
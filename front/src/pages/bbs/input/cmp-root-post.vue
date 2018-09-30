<template>
  <details class="mb-3">
    <summary class="mb-2">
      <span>{{ post.title }}</span>
      <span class="ml-2 badge bg-main text-white">{{ post.author }}</span>
    </summary>
    <div class="ws-preline text-08rem">{{ post.content }}</div>
  </details>
</template>

<script>
import xhr from '@/xhr'

export default {
  created: function () {
    this.$http
      .get(`/api/bbs/post/${this.$route.params.id}`)
      .then((res) => {
        this.post = res.data
      })
  },
  props: {
    id: String,
  },
  data: function () {
    return {
      post: {},
    }
  },
}
</script>
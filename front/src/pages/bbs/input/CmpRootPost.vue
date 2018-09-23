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
    xhr.get(`/api/bbs/post/${this.$route.params.id}`, null,(res) => {
      this.post = res
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
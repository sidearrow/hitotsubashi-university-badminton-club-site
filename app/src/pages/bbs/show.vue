<template>
<div>
  <div class="h3">{{ post.title }}</div>
  <div class="text-right my-3">
    <router-link class="btn btn-outline-success mr-2 px-4"
                 :to="`/bbs/posts/${postId}/edit`">編集</router-link>
    <router-link class="btn btn-outline-danger px-4"
                 :to="`/bbs/posts/${postId}/delete`">削除</router-link>
  </div>
  <div class="mb-5">
    <span>{{ post.author }}</span>
    <span class="ml-2 text-monospace">{{ post.createdAt }}</span>
  </div>
  <div class="ws-preline mb-3">{{ post.content }}</div>

  <!-- コメント -->
  <div class="card mt-5">
    <div class="card-header">コメント</div>
    <div class="card-body">
      <div v-for="(v, i) in post.comments" :key="i">
        <div class="mt-3">
          <span>{{ v.author }}</span>
          <span class="ml-2 text-monospace">{{ v.createdAt }}</span>
        </div>
        <div class="text-right">
          <button class="btn btn-outline-danger">削除</button>
        </div>
        <p class="ws-preline">{{ v.content }}</p>
      </div>
      <hr class="my-5">
      <cmp-input-comment @done-post="fetchData"/>
    </div>
  </div>

  <div class="mt-3">
    <router-link to="/bbs/posts">一覧へ</router-link>
  </div>
</div>
</template>

<script>
import CmpInputComment from './cmp-input-comment'

export default {
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http.get('/bbs/posts/' + this.postId)
        .then((res) => {
          this.post = res.data
        })
    },
  },
  data () {
    return {
      post: {},
      postId: this.$route.params.id,
      modalTargetCommentId: null,
    };
  },
  components: {
    'cmp-input-comment': CmpInputComment,
  }
}
</script>

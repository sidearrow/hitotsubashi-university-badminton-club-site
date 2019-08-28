<template>
  <div>
    <div class="h3">{{ post.post.title }}</div>
    <div class="text-right my-3">
      <button
        class="btn btn-outline-primary mr-2 px-4"
        data-toggle="modal"
        data-target="#editModal"
      >編集</button>
      <button class="btn btn-outline-danger px-4" data-toggle="modal" data-target="#deleteModal">削除</button>
    </div>
    <div class="mb-5">
      <span>{{ post.post.author }}</span>
      <span class="ml-2 text-monospace">{{ post.post.createdAt }}</span>
    </div>
    <div class="ws-preline mb-5">{{ post.post.content }}</div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <router-link class="btn btn-block btn-outline-secondary mr-2 px-4" to="/bbs">戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getPost } from '../../../firebase/bbs';
import { getDateString } from '../../../utils'

export default {
  created: async function() {
    const post = await getPost(this.$route.params.postId);
    post.post.createdAt = getDateString(post.post.createdAt.toDate())
    this.post = post
  },
  data: function() {
    return {
      post: {
        post: {
          title: '',
          author: '',
          content: '',
          createdAt: '',
        }
      }
    };
  }
};
</script>

<template>
  <div>
    <h1 class="title-main">掲示板</h1>
    <p>試合の結果などをお知らせします。</p>
    <section class="mb-3">
      <div class="alert alert-primary">
        <p>掲示板はこちらのリンクからご確認ください。</p>
        <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">新掲示板</a>
        <br />
        <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板</a>
      </div>
      <!--
      <div class="row justify-content-center py-2">
        <div class="col-sm-4">
          <router-link to="/bbs/create" class="btn btn-outline-primary btn-block">新規投稿</router-link>
        </div>
      </div>
      <div class="mt-5">
        <div class="mb-4" v-for="(post, i) in posts" :key="i">
          <div>
            <router-link :to="`/bbs/${post.id}`">{{ post.title }}</router-link>
          </div>
          <div class="mt-2">
            <div>
              <span>by {{ post.author }}</span>
              <span class="ml-4 text-monospace text-secondary">{{ post.createdAt }}</span>
            </div>
          </div>
        </div>
      </div>
      -->
    </section>
  </div>
</template>

<script>
import { Post, getPosts } from '../../firebase/bbs'
import { getDateString } from '../../utils'

export default {
  created: async function() {
    this.posts = (await getPosts()).map(post => {
      post.createdAt = getDateString(post.createdAt.toDate())
      return post
    });
  },
  data: function() {
    return {
      posts: []
    };
  }
};
</script>

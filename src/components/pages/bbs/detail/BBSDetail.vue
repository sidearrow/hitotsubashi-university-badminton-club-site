<template>
  <div>
    <article>
      <h2 class="mdc-typography--headline5">{{ post.title }}</h2>
      <p>{{ post.name }}</p>
      <p class="slf-talign-right">{{ post.date }}</p>
      <section v-html="post.content" style="white-space:pre-line"></section>
      <div class="slf-mtop-20">
        <router-link to="/bbs">一覧へ</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import bbsFunction from '@/components/pages/bbs/bbsFunction';

export default {
  created () {
    bbsFunction.getOne(this.$route.params.id, (res) => {
      this.post = res;
    });
  },
  data () {
    return {
      post: {}
    };
  }
}
</script>
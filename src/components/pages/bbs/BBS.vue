<template>
  <div>
    <content-title title="BBS"/>
    <article>
      <section>
        <p><router-link to="/bbs/input">新規投稿</router-link></p>
        <ul>
          <li><a :href="bbsUrl.old_a" target="_blank">旧掲示板１</a></li>
          <li><a :href="bbsUrl.old_b" target="_blank">旧掲示板２</a></li>
        </ul>
      </section>
      <section>
      </section>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import config from '@/Config';

import bbsFunction from '@/components/pages/bbs/bbsFunction';

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
  },
  created () {
    this.posts = bbsFunction.get();
    console.log(this.posts);
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      pageNum: 1,
      posts: [],
      bbsUrl: config.bbs,
    }
  },
}
</script>
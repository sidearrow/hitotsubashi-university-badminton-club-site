<template>
  <main>
    <content-title title="BBS"/>
    <article>
      <section>
        <ul>
          <li><a :href="bbsUrl.old_a" target="_blank">旧掲示板１</a></li>
          <li><a :href="bbsUrl.old_b" target="_blank">旧掲示板２</a></li>
        </ul>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import config from '@/Config';

export default {
  beforeCreate () {
    document.title = '掲示板 - 一橋バド';
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
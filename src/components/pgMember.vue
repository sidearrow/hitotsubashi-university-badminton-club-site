<template>
  <main>
    <content-title title="部員紹介"/>
    <article>
      <section class="mdc-card">
        <div class="markdown-body" v-html="content"></div>
      </section>
    </article>
  </main>
</template>

<script>
import axios from 'axios';
import ContentTitle from './ContentTitle';
import config from '@/Config';

export default {
  beforeCreate: function () {
    document.title = '部員紹介 - 一橋バド';
    axios.get(config.ghBaseUrl + 'member.json').then((res) => {
      this.content = res.data.html;
    });
  },
  mounted: function () {
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      content: '',
    }
  },
};
</script>
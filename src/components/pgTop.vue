<template>
  <main>
    <content-title title="TOP"/>
    <article>
      <section class="mdc-card">
        <div class="markdown-body" v-html="content"></div>
      </section>
    </article>
  </main>
</template>

<script>
import axios from 'axios';
import config from '@/Config';
import ContentTitle from './ContentTitle';

export default {
  beforeCreate: function () {
    document.title = 'TOP - 一橋バド';
    axios.get(config.ghBaseUrl + 'top.json').then((res) => {
      this.content = res.data.html;
    })
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      content: '',
    };
  }
};
</script>
<template>
  <main>
    <content-title title="大会結果"/>
    <article>
      <section class="mdc-card" v-html="content"></section>
    </article>
  </main>
</template>

<script>
import axios from 'axios';
import ContentTitle from './ContentTitle';
import config from '@/Config';

export default {
  beforeCreate: function () {
    document.title = '大会結果 - 一橋バド';
    axios.get(config.ghBaseUrl + 'result.json').then((res) => {
      this.content = res.data.html;
    });
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
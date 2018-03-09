<template>
  <main>
    <dl v-for="item in items">
      <dt>{{ item.season }}</dt>
      <dd>男子：{{ item.m }}</dd>
      <dd>女子：{{ item.f }}</dd>
    </dl>
  </main>
</template>

<script>
const contentful = require('contentful');
import config from '@/Config';

export default {
  beforeCreate: function () {
    document.title = '大会結果 - 一橋バド';
    const contentfulClient = contentful.createClient(config.contentful.token);
    contentfulClient.getEntry(config.contentful.id.result).then((res) => {
      this.items = res.fields.result;
    });
  },
  data: function () {
    return {
      items: [],
    };
  }
};
</script>
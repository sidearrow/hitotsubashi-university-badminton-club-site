<template>
  <main>
    <div v-for="item in items">
      <h1 class="mdc-typography--headline">{{ item.title }}</h1>
      <div v-html="item.text"></div>
    </div>
  </main>
</template>

<script>
const contentful = require('contentful');
const marked = require('marked');
import config from '@/Config';

export default {
  beforeCreate: function () {
    const contentfulClient = contentful.createClient(config.contentful.token);
    contentfulClient.getEntries({
      content_type: 'santama',
    }).then((res) => {
      let tmp = [];
      res.items.forEach((val) => {
        tmp.push({
          title: val.fields.title,
          text: marked(val.fields.content),
        });
      });
      this.items = tmp;
    });
  },
  data: function () {
    return {
      items: [],
    };
  }
};
</script>
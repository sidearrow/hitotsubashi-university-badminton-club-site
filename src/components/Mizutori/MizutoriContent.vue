<template>
  <div>
    <ul class="mdc-list">
      <li class="mdc-list-item" v-for="val in obMsg">
        <a :href="val.url" target="_blank">{{ val.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
const contentful = require('contentful');
import config from '@/Config';

export default {
  beforeCreate: function () {
    document.title = 'みずとり会 - 一橋バド';
    const contentfulClient = contentful.createClient(config.contentful.token);
    contentfulClient.getEntries({content_type: 'obMessage'}).then((res) => {
      let tmp = [];
      res.items.forEach((val) => {
        tmp.push({
          title: val.fields.title,
          url: val.fields.pdf.fields.file.url,
        });
      });
      this.obMsg = tmp;
    });
  },
  data: function () {
    return {
      isLogin: false,
      obMsg: [],
    }
  }
};
</script>
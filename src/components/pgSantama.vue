<template>
  <main>
    <content-title title="三多摩地区学生バドミントン選手権大会"/>
    <article>
      <section class="mdc-card">
        <div v-for="item in items">
          <h1 class="mdc-typography--headline">{{ item.title }}</h1>
          <div v-html="item.text"></div>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from './ContentTitle';
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
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      items: [],
    };
  }
};
</script>
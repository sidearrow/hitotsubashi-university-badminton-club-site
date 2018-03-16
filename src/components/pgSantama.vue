<template>
  <main>
    <content-title title="三多摩地区学生バドミントン選手権大会"/>
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
    document.title = '三多摩大会 - 一橋バド';
    axios.get(config.ghBaseUrl + 'santama.json').then((res) => {
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
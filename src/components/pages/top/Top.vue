<template>
  <div>
    <content-title title="TOP"/>
    <article>
      <section class="mdc-card">
        <div class="markdown-body" v-html="content"></div>
      </section>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';

export default {
  beforeCreate: function () {
    document.title = 'TOP - 一橋バド';
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
<template>
  <main>
    <content-title title="大会結果"/>
    <article>
    </article>
  </main>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';

export default {
  beforeCreate: function () {
    document.title = '大会結果 - 一橋バド';
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
    };
  }
};
</script>
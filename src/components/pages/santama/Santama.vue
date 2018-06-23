<template>
  <main>
    <content-title title="三多摩大会"/>
    <p>三多摩地区学生バドミントン選手権大会</p>
    <article>
    </article>
  </main>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';

export default {
  beforeCreate: function () {
    document.title = '三多摩大会 - 一橋バド';

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
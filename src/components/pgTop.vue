<template>
  <main>
    <content-title title="TOP"/>
    <article>
      <section class="mdc-card">
        <p>2017年7月現在、私達一橋大学バドミントン部は男子24名、女子7名の計31名で活動しています。男女・経験者大学始め関係なく、リーグ戦での4部への昇格を目指して日々練習に励んでいます。</p>
      </section>
      <section class="mdc-card">
        <content-practice/>
      </section>
    </article>
  </main>
</template>

<script>
import ContentTitle from './ContentTitle';
import ContentPractice from './TopPractice';

export default {
  beforeCreate: function () {
    document.title = 'TOP - 一橋バド';
  },
  components: {
    'content-practice': ContentPractice,
    'content-title': ContentTitle,
  },
};
</script>
<template>
  <div>
    <div>
    2017年7月現在、私達一橋大学バドミントン部は男子24名、女子7名の計31名で活動しています。男女・経験者大学始め関係なく、リーグ戦での4部への昇格を目指して日々練習に励んでいます。
    </div>
    <ContentPractice />
    <ContentMember />
  </div>
</template>

<script>
import ContentPractice from './TopPractice';
import ContentMember from './TopMember';

export default {
  components: {
    ContentPractice: ContentPractice,
    ContentMember: ContentMember,
  },
};
</script>
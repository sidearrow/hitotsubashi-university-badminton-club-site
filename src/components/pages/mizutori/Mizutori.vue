<template>
  <main>
    <content-title title="みずとり会"/>
    <article>
      <div>準備中</div>
    </article>
  </main>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';

export default {
  mounted: function () {
    if (!this.isLogin) {
      this.isLogin = window.sessionStorage.getItem('isLogin') === 'true';
    }
  },
  data () {
    return {
      isLogin: false,
    }
  },
  components: {
    'content-title': ContentTitle,
  },
};
</script>
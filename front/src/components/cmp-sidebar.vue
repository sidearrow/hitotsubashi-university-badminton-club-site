<template>
  <div class="list-group list-group-flush">
    <router-link
      v-for="(v, i) in menuList" :key="i"
      :to="v.href"
      class="list-group-item list-group-item-action"
    >{{ v.text }}</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menuList: [
        { text: 'TOP', href: this.$config.url.top },
        { text: '部員紹介', href: this.$config.url.member },
        { text: '試合結果', href: this.$config.url.result },
        { text: '三多摩大会', href: this.$config.url.santama },
        { text: '掲示板', href: this.$config.url.bbs },
        { text: 'みずとり会', href: this.$config.url.mizutori},
        { text: '管理画面', href: this.$config.url.manage }
      ]
    }
  }
}
</script>
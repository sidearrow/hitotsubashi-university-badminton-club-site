<template>
  <div class="dropdown">
    <a
      class="btn btn-transpalent dropdown-toggle"
      @click="toggle()"
    ></a>
    <div :class="'dropdown-menu dropdown-menu-right' + (isShow ? ' show' : '')">
      <router-link
        v-for="(v, i) in menuList"
        :key="i"
        class="dropdown-item"
        :to="v.href"
        @click.native="toggle()"
      >{{ v.text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
    }
  },
  data: function () {
    return {
      isShow: false,
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
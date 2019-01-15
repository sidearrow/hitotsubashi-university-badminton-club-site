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
        { text: 'MEMBER', href: this.$config.url.member },
        { text: 'RESULT', href: this.$config.url.result },
        { text: 'SANTAMA', href: this.$config.url.santama },
        { text: 'BBS', href: this.$config.url.bbs },
        { text: 'MIZUTORI', href: this.$config.url.mizutori},
      ]
    }
  }
}
</script>
<template>
  <v-navigation-drawer
    mobile-break-point="720"
    width="240"
    v-model="isOpen"
    fixed
    app
  >
    <v-list>
      <v-list-tile
        v-for="(v, i) in menuList"
        :key="i"
        :to="v.href"
        color="primary"
      >
        <v-list-tile-action>
          <v-icon
            color="primary"
          >chevron_right</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ v.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  },
  data: function () {
    return {
      isOpen: true,
      menuList: [
        { text: 'TOP', href: this.$config.url.top },
        { text: '部員紹介', href: this.$config.url.member },
        { text: '試合結果', href: this.$config.url.result },
        { text: '三多摩大会', href: this.$config.url.santama },
        { text: '掲示板', href: this.$config.url.bbs },
        { text: 'みずとり会', href: this.$config.url.mizutori, divider: true },
        { text: '管理画面', href: this.$config.url.manage }
      ]
    }
  }
}
</script>
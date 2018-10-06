<template>
  <div>
    <aside class="mdc-drawer mdc-drawer--modal">
      <div class="mdc-drawer__content">
        <div class="mdc-list">
          <template
            v-for="(v, i) in menuList"
          >
            <router-link
              class="mdc-list-item mdc-list-item--activated"
              :key="i"
              :to="v.href"
            >
              <i class="material-icons mdc-list-item__graphic">chevron_right</i>
              <span class="mdc-list-item__text">{{ v.text }}</span>
            </router-link>
            <div
              v-if="v.divider === true"
              :key="i + 'div'"
              class="mdc-list-divider"
            ></div>
          </template>
        </div>
      </div>
    </aside>
    <div class="mdc-drawer-scrim"></div>
  </div>
</template>

<script>
import { MDCDrawer } from "@material/drawer"

export default {
  mounted: function () {
    this.mdcDrawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))
  },
  methods: {
    toggle: function () {
      this.mdcDrawer.open = !this.mdcDrawer.open
    }
  },
  data: function () {
    return {
      mdcDrawer: {},
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
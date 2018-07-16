<template>
  <div id="main">
    <header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a class="material-icons mdc-top-app-bar__navigation-icon" v-if="!isPC" @click="clickMenu()">menu</a>
          <span class="mdc-top-app-bar__title">{{ navTitle }}</span>
        </section>
      </div>
    </header>

    <!-- PC -->
    <nav class="mdc-drawer mdc-drawer--permanent mdc-typography" v-if="isPC">
      <div class="mdc-drawer__toolbar-spacer"></div>
      <div class="mdc-drawer__content mdc-list">
        <router-link class="mdc-list-item" :to="v.href" v-for="v in menuItems">{{ v.text }}</router-link>
      </div>
    </nav>

    <!-- SP -->
    <nav class="mdc-drawer mdc-drawer--temporary mdc-typography" v-else>
      <div class="mdc-drawer__drawer">
        <div class="mdc-drawer__content mdc-list">
          <router-link class="mdc-list-item" :to="v.href" v-for="v in menuItems">{{ v.text }}</router-link>
        </div>
      </div>
    </nav>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppMenuContent from '@/components/AppMenuContent';

import {MDCTemporaryDrawer} from '@material/drawer';

export default {
  mounted () {
    if (!this.isPC) {
      this.mdcDrawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
    }
  },
  methods: {
    clickMenu: function () {
      this.mdcDrawer.open = true;
    }
  },
  components: {
    'slf-app-menu-content': AppMenuContent,
  },
  data: function () {
    return {
      isPC: window.innerWidth >= 600,
      navTitle: '一橋大学 バドミントン部',
      mdcDrawer: {},
      menuItems: [
        {
          text: 'TOP',
          href: '/',
        },
        {
          text: 'Member',
          href: '/member',
        },
        {
          text: 'Result',
          href: '/result',
        },
        {
          text: 'Santama',
          href: '/santama',
        },
        {
          text: 'BBS',
          href: '/bbs',
        },
        {
          text: 'Mizutori',
          href: '/mizutori',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
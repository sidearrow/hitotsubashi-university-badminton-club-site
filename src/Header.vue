<template><div>
  <header class="mdc-toolbar mdc-toolbar--fixed">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <a class="material-icons mdc-toolbar__menu-icon" @click="openDrawer">menu</a>
        <span class="mdc-toolbar__title">一橋大学バドミントン部</span>
      </section>
    </div>
  </header>
  <aside class="mdc-drawer mdc-drawer--temporary mdc-typography">
    <nav class="mdc-drawer__drawer">
      <header class="mdc-drawer__header">
        <div class="mdc-drawer__header-content">Hitotsubashi Badminton Club</div>
      </header>
      <nav class="mdc-drawer__content mdc-list">
        <router-link class="mdc-list-item mdc-list-item--activated" :to="menuItem.path" v-for="menuItem in menuItems" @click.native="closeDrawer">
          <i class="material-icons mdc-list-item__graphic">label_outline</i>
          {{ menuItem.name }}
        </router-link>
      </nav>
    </nav>
  </aside>
</div></template>

<script>
import {MDCTemporaryDrawer} from '@material/drawer';

export default {
  mounted: function () {
    this.mdcDrawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
  },
  methods: {
    openDrawer: function () {
      this.mdcDrawer.open = true;
    },
    closeDrawer: function () {
      this.mdcDrawer.open = false;
    },
  },
  data: function () {
    return {
      mdcDrawer: {},
      menuItems: {
        1: {name:'TOP', path: '/'},
        2: {name:'Member', path: '/member'},
        3: {name:'BBS', path: '/bbs/list/1'},
        4: {name:'Mizutori', path: '/mizutori'},
      },
    }
  },
};
</script>
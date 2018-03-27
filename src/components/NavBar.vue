<template>
  <header class="mdc-toolbar mdc-toolbar--fixed">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <a class="material-icons mdc-toolbar__menu-icon" @click="openDrawer">menu</a>
        <span class="mdc-toolbar__title">一橋大学バドミントン部</span>
      </section>
    </div>
    <aside class="mdc-drawer mdc-drawer--temporary mdc-typography">
      <nav class="mdc-drawer__drawer">
        <header class="mdc-drawer__header">
          <div class="mdc-drawer__header-content">Hitotsubashi Badminton Club</div>
        </header>
        <nav class="mdc-drawer__content mdc-list">
          <router-link class="mdc-list-item" :to="menuItem.path" v-for="menuItem in menuItems" :key="menuItem.name" @click.native="closeDrawer">
            {{ menuItem.name }}
          </router-link>
        </nav>
      </nav>
    </aside>
  </header>
</template>

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
      menuItems: [
        {name:'TOP', path: '/'},
        {name:'Member', path: '/member'},
        {name:'Result', path: '/result'},
        {name:'Santama', path: '/santama'},
        {name:'BBS', path: '/bbs/list/2018'},
        {name:'Mizutori', path: '/mizutori'},
      ],
    }
  },
};
</script>
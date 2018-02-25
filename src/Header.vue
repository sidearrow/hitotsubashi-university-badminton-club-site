<template><div>
  <header class="mdc-toolbar mdc-toolbar--fixed">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <router-link to="/" class="mdc-toolbar__title">一橋大学バドミントン部</router-link>
      </section>
    </div>
    <nav class="mdc-tab-bar" id="header-tab">
      <router-link to="/" class="mdc-tab mdc-tab--active">Main</router-link>
      <router-link to="/bbs/list" class="mdc-tab">BBS</router-link>
      <router-link to="/mizutori" class="mdc-tab">Mizutori</router-link>
      <span class="mdc-tab-bar__indicator"></span>
    </nav>
  </header>
</div></template>

<script>
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

export default {
  mounted: function () {
    const tabBar = new MDCTabBar(document.getElementById('header-tab'));
  }
};
</script>
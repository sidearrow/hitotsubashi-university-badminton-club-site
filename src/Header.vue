<template><div>
  <header class="mdc-toolbar mdc-toolbar--fixed">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <router-link to="/" class="mdc-toolbar__title">一橋大学バドミントン部</router-link>
      </section>
    </div>
    <nav class="mdc-tab-bar">
      <router-link to="/" class="mdc-tab mdc-tab--active">Main</router-link>
      <router-link to="/bbs/list/1" class="mdc-tab">BBS</router-link>
      <router-link to="/bbs/Mizutori" class="mdc-tab">Mizutori</router-link>
      <span class="mdc-tab-bar__indicator"></span>
    </nav>
  </header>
</div></template>

<script>
import { MDC } from '@/main';

export default {
  mounted: function () {
    const MDCTab = MDC.tabs.MDCTab;
    const MDCTabFoundation = MDC.tabs.MDCTabFoundation;
  }
};
</script>
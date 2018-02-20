<template>
  <div>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <router-link class="mdl-navigation__link mdl-layout-title" to="/">一橋大学バドミントン部</router-link>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <router-link class="mdl-navigation__link" to="/bbs/list/1">BBS</router-link>
            <router-link class="mdl-navigation__link" to="/mizutori">Mizutori</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/bbs/list">BBS</router-link>
          <router-link class="mdl-navigation__link" to="/mizutori">Mizutori</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
header {
  background-color: #ac2926 !important;
}
</style>
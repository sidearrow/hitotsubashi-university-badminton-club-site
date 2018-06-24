<template>
  <div>
    <md-app>
      <!-- PC -->
      <md-app-toolbar class="md-primary" v-if="isPC">
        <span class="md-title">{{ navTitle }}</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="clipped" v-if="isPC">
        <md-list>
          <md-list-item v-for="menuItem in menuItems">
            <router-link :to="menuItem.href" class="md-list-item-text">{{ menuItem.text }}</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <!-- SP -->
      <md-app-toolbar class="md-primary" v-if="!isPC">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ navTitle }}</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" v-if="!isPC">
        <md-list>
          <md-list-item v-for="menuItem in menuItems" @click="menuVisible = !menuVisible">
            <router-link :to="menuItem.href" class="md-list-item-text">{{ menuItem.text }}</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('resize', () => {
      this.isPC = window.innerWidth >= 600;
    });
  },
  data: function () {
    return {
      isPC: window.innerWidth >= 600,
      menuVisible: false,
      navTitle: '一橋大学 バドミントン部',
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

.md-drawer {
  width: 230px;
}

.md-app-content {
  max-width: 720px;
  margin: 0 auto;
  border: none;
}
</style>
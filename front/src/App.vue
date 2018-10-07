<template>
  <v-app>
    <cmp-header/>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          row
          :class="$vuetify.breakpoint.smAndUp ? 'ma-5' : 'ma-1'"
        >
          <router-view
            id="slf-main-content"
          ></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import cmpHeader from '@/components/header/index'

export default {
  components: {
    'cmp-header': cmpHeader
  },
}
</script>

<style lang="scss">
@import './assets/style';

#slf-main-content {
  width: 100%;
  max-width: 720px;
}
</style>
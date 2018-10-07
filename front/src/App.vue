<template>
  <v-app>
    <cmp-header/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import cmpHeader from '@/components/header/index'

export default {
  components: {
    'cmp-header': cmpHeader,
  },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
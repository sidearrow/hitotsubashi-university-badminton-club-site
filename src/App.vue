<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    </div>
  </div>
</template>

<script>
import { MDC } from '@/main';

import Header from './Header';

export default {
  mounted: function () {
    MDC.autoInit();
  },
  components: {
    Header: Header,
  },
}
</script>

<style>
:root {
  --mdc-theme-primary: #ac2926;
  --mdc-theme-primary-light: #c46967;
  --mdc-theme-primary-dark: #b43e3b;
}
</style>
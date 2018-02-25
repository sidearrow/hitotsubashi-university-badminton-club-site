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
import Header from './Header';

export default {
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

.slf-talign-center {
  text-align: center;
}
.slf-talign-right {
  text-align: right;
}

.slf-card-article {
  padding: 16px;
}

.panel {
  display: none;
}
.panel.active {
  display: block;
}
</style>
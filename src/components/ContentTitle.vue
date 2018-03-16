<template>
  <header class="mdc-card" id="content-title">
    <h1 class="mdc-typography--display1">{{title}}</h1>
  </header>
</template>

<script>
export default {
  mounted: function () {
  },
  props: ['title'],
};
</script>

<style>
#content-title {
  background-color: #c46967;
  color: white;
}
</style>
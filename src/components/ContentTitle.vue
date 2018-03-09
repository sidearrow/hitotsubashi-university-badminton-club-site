<template>
  <header class="mdc-elevation--z4" id="content-title">
    <h1 class="mdc-typography--display2">{{title}}</h1>
  </header>
</template>

<script>
export default {
  mounted: function () {
    const height = document.getElementById('content-title').clientHeight;
    document.querySelector('#content-title ~ article').style.marginTop = `${height + 20}px`;
  },
  props: ['title'],
  destroyed: function () {
    document.querySelector('#content-title ~ article').removeAttribute('style');
  },
};
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 70px 16px 16px 16px;
  color: #fff;
  background-color: #c46967;
}
</style>
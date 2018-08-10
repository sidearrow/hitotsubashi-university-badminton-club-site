<template>
  <h1 class="mdc-typography--headline4">{{ title }}</h1>
</template>

<script>
export default {
  mounted: function () {
  },
  props: ['title'],
};
</script>

<style>
h1:before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(/static/img/shuttle.svg);
  background-size: contain;
  margin-right: 10px;
}
</style>
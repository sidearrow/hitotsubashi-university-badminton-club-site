<template>
  <div>
    <div v-for="(v, key) in obMsg">
      <div>{{ key }}年</div>
      <span class="ml-2" v-for="v2 in v">
        <a :href="v2.url" target="__blank">{{ v2.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
  },
  data: function () {
    return {
      obMsg: {},
    }
  }
};
</script>
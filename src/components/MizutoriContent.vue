<template>
  <div>
    <ul class="mdc-list">
      <li class="mdc-list-item" v-for="val in obMsg">
        <a :href="val.url" target="_blank">{{ val.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '@/Config';

export default {
  beforeCreate: function () {
    document.title = 'みずとり会 - 一橋バド';
  },
  data: function () {
    return {
      isLogin: false,
      obMsg: [],
    }
  }
};
</script>
<template>
  <div>
    <ul class="mdc-list mdc-list--non-interactive">
      <li class="mdc-list-item" v-for="(val, key) in obMsg">
        <a :href="val" target="_blank">{{ key }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {storage} from '@/main.js';
import config from '@/Config.js';
import axios from 'axios';

export default {
  mounted: function () {
    axios.get(config.obmsg).then((res) => {
      res.data.forEach((val) => {
        this.$set(this.obMsg, val[0], val[1]);
      });
    }).catch(() => {});
  },
  data: function () {
    return {
      obMsg: {},
    }
  }
};
</script>
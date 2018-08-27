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
import { firestore } from '@/main';

export default {
  created: async function () {
    this.obMsg = (await firestore.collection('mizutori').doc('ob-msg').get()).data();
  },
  data: function () {
    return {
      obMsg: {},
    }
  }
};
</script>
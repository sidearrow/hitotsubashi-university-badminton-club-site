<template>
  <div>
    <div v-for="(v, key) in obMsg">
      <div>{{ key }}年</div>
      <span class="ml-2" v-for="v2 in v">
        <a :href="v2.url">{{ v2.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
import { firestore } from '@/main';

export default {
  created: async function () {
    const res = (await firestore.collection('mizutori').doc('ob-msg').get()).data();
    for (let key in res) {
      this.obMsg[res[key].year].push(res[key]);
    }
  },
  data: function () {
    return {
      obMsg: {
        2018: [],
      },
    }
  }
};
</script>
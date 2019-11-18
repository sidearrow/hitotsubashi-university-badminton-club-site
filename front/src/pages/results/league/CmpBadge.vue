<template>
  <span>
    <span
      class="border border-main text-main px-2 py-1 text-nowrap"
      v-if="flg === 1"
      style="font-size:0.9rem"
    >昇格</span>
    <span
      class="border border-secondary text-secondary px-2 py-1 text-nowrap"
      v-if="flg === -1"
      style="font-size:0.9rem"
    >降格</span>
  </span>
</template>

<script>
export default {
  props: ["flg"]
};
</script>

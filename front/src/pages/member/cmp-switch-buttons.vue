<template>
<div class="row my-5">
  <div
    class="col-sm-6 text-center my-2"
    v-for="(v, i) in buttonsList" :key="i"
  >
    <button
      :class="'btn btn-outline-dark' + ((i === now-1) ? ' active' : '')"
      @click="click(i)"
    >{{ v[0] }}<small class="ml-2">{{ v[1] }}</small></button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    now: Number
  },
  methods: {
    click: function (num) {
      this.$emit('switch', num+1)
    }
  },
  data: function () {
    return {
      buttonsList: [
        [ '1 年生', '2018 年入学' ],
        [ '2 年生', '2017 年入学' ],
        [ '3 年生', '2016 年入学' ],
        [ '4 年生', '2015 年入学' ],
      ]
    }
  }
}
</script>
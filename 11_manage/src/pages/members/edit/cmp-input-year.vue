<template>
  <div class="form-group row">
    <label class="col-auto">入学年度</label>
    <div class="col">
      <select
        class="form-control form-control-sm"
        v-model="value"
      >
        <option
          v-for="option in options" :key="option"
        >{{ option }}</option>
      </select>
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    set: function (value) {
      this.value = value
    },
    get: function () {
      return this.value
    }
  },
  data: function () {
    return {
      value: '',
      options: [2015, 2016, 2017, 2018, 2019]
    }
  }
}
</script>
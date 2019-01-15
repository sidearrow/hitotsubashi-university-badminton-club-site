<template>
  <div class="form-group row">
    <label class="col-auto">入学年度</label>
    <div class="col">
      <select class="form-control form-control-sm">
        <option
          v-for="option in options" :key="option"
        >{{ option }}</option>
      </select>
    </div>
  </div>  
</template>

<script>
export default {
  data: function () {
    return {
      options: [...Array(5).keys()].map(i => 2015 + i)
    }
  }
}
</script>
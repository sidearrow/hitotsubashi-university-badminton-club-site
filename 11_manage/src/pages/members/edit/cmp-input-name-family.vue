<template>
  <div class="form-group row">
    <label class="col-auto">姓</label>
    <div class="col">
      <input
        class="form-control form-control-sm"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>  
</template>

<script>
export default {
  props: ['value'],
}
</script>
<template>
<div class="form-group">
  <label>名前</label>
  <input
    :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
  <div class="invalid-feedback">{{ errorMsg }}</div>
</div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    check: function () {
      this.isError = false
      this.errorMsg = ''
      if (this.value.trim().length === 0) {
        this.isError = true
        this.errorMsg = '`名前` を入力してください'
      } else if (this.value.trim().length > 100) {
        this.isError = true
        this.errorMsg = '`名前` は 100 字以内入力してください'
      }
      return this.isError
    },
  },
  data: function () {
    return {
      isError: false,
      errorMsg: '',
    }
  }
}
</script>
<template>
<div class="form-group">
  <label>本文</label>
  <textarea
    :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
    rows="5"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
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
        this.errorMsg = '`本文` を入力してください'
      } else if (this.value.trim().length > 2000) {
        this.isError = true
        this.errorMsg = '`本文` は 2000 字以内入力してください'
      }
      return this.Error
    }
  },
  data: function () {
    return {
      isError: false,
      errorMsg: '',
    }
  }
}
</script>
<template>
<div class="form-group">
  <label>パスワード</label>
  <input
    type="password"
    :class="'form-control form-control-sm' + (isError ? ' is-invalid' : '')"
    :value="value"
    :disabled="isDisable"
    @input="$emit('input', $event.target.value)"
  >
  <div class="invalid-feedback">{{ errorMsg }}</div>
</div>
</template>

<script>
export default {
  props: ['value', 'isDisable'],
  methods: {
    check: function () {
      this.isError = false
      this.errorMsg = ''
      if (!this.value.match(/\d\d\d\d/)) {
        this.isError = true
        this.errorMsg = '`パスワード` は半角数字 4 字で入力してください'
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
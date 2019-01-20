<template>
  <div class="form-group row">
    <label class="col-auto">高校<sup>*</sup></label>
    <div class="col">
      <input
        type="text"
        v-model="value"
        :class="'form-control form-control-sm' +
                (isError ? ' is-invalid' : '')"
      />
      <div class="invalid-feedback">{{ errorMsg }}</div>
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
  watch: {
    value: function () {
      const fmtValue = this.value.trim()
      this.errorMsg = ''
      if (fmtValue.length === 0) {
        this.errorMsg = '「高校」は必須です'
      } else if (fmtValue.length > 50) {
        this.errorMsg = '「高校」は 50 字以内で入力してください'
      }
    },
    errorMsg: function () {
      this.isError = this.errorMsg !== ''
    }
  },
  data: function () {
    return {
      isError: false,
      value: '',
      errorMsg: '',
    }
  }
}
</script>
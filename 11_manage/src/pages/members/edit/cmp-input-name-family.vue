<template>
  <div class="form-group row">
    <label class="col-auto">姓<sup>*</sup></label>
    <div class="col">
      <input
        type="text"
        v-model="value"
        :class="'form-control form-control-sm' +
                (!isInit && isError ? ' is-invalid' : '')"
      />
      <div class="invalid-feedback">{{ errorMsg }}</div>
    </div>
  </div>  
</template>

<script>
export default {
  created: function () {
    this.check()
  },
  methods: {
    set: function (value) {
      this.value = value
    },
    check: function () {
      const fmtValue = this.value.trim()
      this.errorMsg = ''
      if (fmtValue.length === 0) {
        this.errorMsg = '「姓」は必須です'
      } else if (fmtValue.length > 20) {
        this.errorMsg = '「姓」は 20 字以内で入力してください'
      }
    }
  },
  watch: {
    value: function () {
      this.isInit = false
      this.check()
    },
    errorMsg: function () {
      this.isError = this.errorMsg !== ''
    }
  },
  data: function () {
    return {
      isInit: true,
      isError: false,
      value: '',
      errorMsg: '',
    }
  }
}
</script>
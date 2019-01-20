<template>
  <div class="form-group row">
    <label class="col-auto">都道府県<sup>*</sup></label>
    <div class="col">
      <input
        type="text"
        v-model="value"
        :class="'form-control form-control-sm' +
                (isError ? ' is-invalid' : '')"
        list="pref"
      />
      <datalist id="pref">
        <option
          v-for="(v, i) in prefecture" :key="i"
        >{{ v }}</option>
      </datalist>
      <div class="invalid-feedback">{{ errorMsg }}</div>
    </div>
  </div>  
</template>

<script>
import prefectureList from './prefecture-list'

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
        this.errorMsg = '「都道府県」は必須です'
      } else if (fmtValue.length > 20) {
        this.errorMsg = '「都道府県」は 20 字以内で入力してください'
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
      prefecture: prefectureList
    }
  }
}
</script>
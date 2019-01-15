<template>
  <div>
    <div class="row">
      <div class="col-6">
        <cmp-input-name-family v-model="input.nameFamily" />
      </div>
      <div class="col-6">
        <cmp-input-name-given v-model="input.nameGiven" />
      </div>
    </div>
    <cmp-input-year v-model="input.year" />
    <cmp-input-highschool v-model="input.highschool" />
    <cmp-input-prefecture v-model="input.prefecture" />
    <cmp-input-image />
    <cmp-input-intro v-model="input.intro" />
    <div class="text-center">
      <button class="btn btn-sm btn-primary">保存</button>
    </div>
  </div>  
</template>

<script>
import cmpInputNameFamily from './cmp-input-name-family'
import cmpInputNameGiven from './cmp-input-name-given'
import cmpInputYear from './cmp-input-year'
import cmpInputHighschool from './cmp-input-highschool'
import cmpInputPrefecture from './cmp-input-prefecture'
import cmpInputImage from './cmp-input-image'
import cmpInputIntro from './cmp-input-intro'

export default {
  data: function () {
    return {
      input: {
        nameFamily: '',
        nameGiven: '',
        prefecture: '',
        year: '',
        highschool: '',
        intro: ''
      }
    }
  },
  components: {
    'cmp-input-year': cmpInputYear,
    'cmp-input-name-family': cmpInputNameFamily,
    'cmp-input-name-given': cmpInputNameGiven,
    'cmp-input-highschool': cmpInputHighschool,
    'cmp-input-prefecture': cmpInputPrefecture,
    'cmp-input-image': cmpInputImage,
    'cmp-input-intro': cmpInputIntro,
  },
}
</script>
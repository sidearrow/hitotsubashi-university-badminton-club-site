<template>
<div>
  <cmp-page-title title="大会結果" />
  <p>関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。</p>
  <table class="table table-bordered">
    <tbody>
      <tr>
        <td class="bg-light" colspan="2"></td>
        <td class="bg-light text-center">男子</td>
        <td class="bg-light text-center">女子</td>
      </tr>
      <tr
        v-for="(v, i) in resultData" :key="i"
      >
        <td
          v-if="i === 0 || v.season === '秋'"
          class="bg-light align-middle text-center"
          :rowspan="v.season === '秋' ? 2 : 1"
        >{{ v.year }}</td>
        <td class="text-center bg-light">{{ v.season }}</td>
        <td>{{ v.m }}</td>
        <td>{{ v.f }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import resultData from '@/assets/json/result.json'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.result
  },
  data: function () {
    return {
      resultData: resultData,
    };
  },
  components: {
    'cmp-page-title': cmpPageTitle
  }
};
</script>
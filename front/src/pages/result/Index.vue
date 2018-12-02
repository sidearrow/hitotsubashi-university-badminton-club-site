<template>
<div>
  <h1>大会結果</h1>
  <p>関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。</p>
  <table class="table">
    <thead>
      <tr>
        <th> </th>
        <th> </th>
        <th>男子</th>
        <th>女子</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(v, i) in resultData" :key="i"
      >
        <td
          v-if="v.season === '秋'"
          rowspan="2"
        >{{ v.year }}</td>
        <td
          v-if="i === 0 && v.season === '春'"
        >{{ v.year }}</td>
        <td>{{ v.season }}</td>
        <td>{{ v.m }}</td>
        <td>{{ v.f }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import cmpPageHeader from '@/components/cmp-page-header'
import resultData from '@/assets/json/result.json'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.result
  },
  data: function () {
    return {
      resultData: resultData,
    };
  }
};
</script>
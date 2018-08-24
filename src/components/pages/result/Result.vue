<template>
  <div>
    <content-title title="大会結果"/>
    <article>
      <table class="table">
        <tr>
          <th></th>
          <th>男子</th>
          <th>女子</th>
        </tr>

        <tr v-for="v in resultData">
          <td>{{ v.year }} {{ v.season }}</td>

          <td v-if="!(v.year === 2011 && v.season === '春')">
            {{ v.m_group }}部{{ v.m_rank }}位
            <span v-if="v.m_flag === 1">昇格</span>
            <span v-if="v.m_flag === -1">降格</span>
          </td>
          <td v-if="!(v.year === 2011 && v.season === '春')">
            {{ v.f_group }}部{{ v.f_rank }}位
            <span v-if="v.f_flag === 1">昇格</span>
            <span v-if="v.f_flag === -1">降格</span>
          </td>

          <!-- 2011春 -->
          <td v-if="(v.year === 2011 && v.season === '春')">中止</td>
          <td v-if="(v.year === 2011 && v.season === '春')">中止</td>

        </tr>
      </table>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import resultData from '@/assets/result.json';

export default {
  beforeCreate: function () {
    document.title = '大会結果 - 一橋バド';
  },
  components: {
    'content-title': ContentTitle,
  },
  data: function () {
    return {
      resultData: resultData,
    };
  }
};
</script>
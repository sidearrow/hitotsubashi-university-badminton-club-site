<template>
  <div>
    <content-title title="大会結果"/>
    <article>
      <md-table md-card>
        <md-table-row>
          <md-table-head></md-table-head>
          <md-table-head>男子</md-table-head>
          <md-table-head>女子</md-table-head>
        </md-table-row>

        <md-table-row v-for="v in resultData">
          <md-table-cell>{{ v.year }} {{ v.season }}</md-table-cell>

          <md-table-cell v-if="!(v.year === 2011 && v.season === '春')">
            {{ v.m_group }}部{{ v.m_rank }}位
            <span v-if="v.m_flag === 1">昇格</span>
            <span v-if="v.m_flag === -1">降格</span>
          </md-table-cell>
          <md-table-cell v-if="!(v.year === 2011 && v.season === '春')">
            {{ v.f_group }}部{{ v.f_rank }}位
            <span v-if="v.f_flag === 1">昇格</span>
            <span v-if="v.f_flag === -1">降格</span>
          </md-table-cell>

          <!-- 2011春 -->
          <md-table-cell v-if="(v.year === 2011 && v.season === '春')">中止</md-table-cell>
          <md-table-cell v-if="(v.year === 2011 && v.season === '春')">中止</md-table-cell>

        </md-table-row>
      </md-table>
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
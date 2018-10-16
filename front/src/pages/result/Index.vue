<template>
  <div>
    <cmp-page-header
      title="大会結果"
      text="関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。"
    />
    <article>
      <v-data-table
        :headers="resultHeaders"
        :items="resultData"
        hide-actions
      >
        <template slot="items" slot-scope="v">
          <td>{{ v.item.year }} {{ v.item.season }}</td>
          <td>{{ v.item.m }}</td>
          <td>{{ v.item.f }}</td>
        </template>
      </v-data-table>
    </article>
  </div>
</template>

<script>
import cmpPageHeader from '@/components/cmp-page-header'
import resultData from '@/assets/json/result.json'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.result
  },
  components: {
    'cmp-page-header': cmpPageHeader,
  },
  data: function () {
    return {
      resultHeaders: [
        { text: '',    sortable: false },
        { text: '男子', sortable: false },
        { text: '女子', sortable: false },
      ],
      resultData: resultData,
    };
  }
};
</script>
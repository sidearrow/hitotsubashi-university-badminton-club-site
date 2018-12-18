<template>
  <div>
    <h1>三多摩大会</h1>
    <p>三多摩地区学生バドミントン選手権大会</p>
    <h2>今年度の大会について</h2>
    <section class="mb-5">
      <p>第５２回三多摩地区学生バドミントン選手権大会</p>
    </section>
    <h2>過去の大会結果</h2>
    <section>
      <div v-for="(v, k) in result" :key="k">
        <span class="mr-2">{{ k }}年</span>
        <span v-for="(v2, i2) in v" :key="i2">
          <a
            :href="`/static/pdf/${k}/${k + v2}_re.pdf`"
            class="result-link"
            target="_blank"
          >{{ v2 }}</a>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import cmpPageHeader from '@/components/cmp-page-header'
import result from './santama_result.js'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.santama
  },
  components: {
    'cmp-page-header': cmpPageHeader,
  },
  data: function () {
    return {
      result: result,
    };
  }
};
</script>

<style>
.result-link {
  margin-right: 5px;
  text-transform: uppercase;
}
</style>
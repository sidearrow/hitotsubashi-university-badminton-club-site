<template>
  <div>
    <content-title title="三多摩大会"/>
    <p>三多摩地区学生バドミントン選手権大会</p>
    <article>
      <h2>結果</h2>
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
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/cmp-content-title'
import result from './santama_result.js'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.santama
  },
  components: {
    'content-title': ContentTitle,
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
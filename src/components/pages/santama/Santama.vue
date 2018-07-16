<template>
  <div>
    <content-title title="三多摩大会"/>
    <p>三多摩地区学生バドミントン選手権大会</p>
    <article>
      <h2>結果</h2>
      <section>
        <div v-for="(v, k) in result">
          <span>{{ k }}年</span>
          <span v-for="v_ in v">
            <a
              :href="`/static/pdf/${k}/${k + v_}_re.pdf`"
              class="result-link"
              target="_blank"
            >{{ v_ }}</a>
          </span>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import result from './santama_result.js';

export default {
  beforeCreate: function () {
    document.title = '三多摩大会 - 一橋バド';

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
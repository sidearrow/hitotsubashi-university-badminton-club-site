<template>
  <div>
    <h1 class="mb-5">三多摩地区学生バドミントン選手権大会</h1>
    <h2 class="mb-3">第 53 回大会 （2019 年度）</h2>
    <section>準備中</section>
    <h2 class="my-5">過去の結果</h2>
    <section>
      <template v-for="(v, i) in results">
        <div :key="i" class="mt-3">{{ v.year }} 年度</div>
        <div class="row" :key="i">
          <div class="col-md-3 col-6 py-1" v-for="(file, j) in v.files" :key="i + '-' + j">
            <button class="btn btn-block btn-outline-main">{{ file.title }}</button>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import results from './list.json';

export default {
  data: function () {
    return {
      results: results,
    }
  },
}

</script>

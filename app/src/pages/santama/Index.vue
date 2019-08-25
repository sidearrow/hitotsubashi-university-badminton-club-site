<template>
  <div>
    <h1 class="mb-5">三多摩地区学生バドミントン選手権大会</h1>
    <h2 class="mb-3">第 53 回大会 （2019 年度）</h2>
    <section>準備中</section>
    <h2 class="mt-5 mb-3">過去の結果</h2>
    <div class="alert alert-info mt-3">別ウィンドウで PDF ファイルが開きます</div>
    <section>
      <div class="card mt-3" v-for="(v, i) in results" :key="i">
        <div class="card-header alert-main">{{ v.year }} 年度</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3 col-6 py-1" v-for="(file, j) in v.files" :key="i + '-' + j">
              <a class="btn btn-block btn-outline-main" target="_blank" :href="`/files/santama/${file.file}`">{{ file.title }}</a>
            </div>
          </div>
        </div>
      </div>
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

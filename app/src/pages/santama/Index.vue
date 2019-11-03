<template>
  <div>
    <h1 class="title-main text-center">三多摩地区学生バドミントン選手権大会</h1>
    <h2 class="title-sub">第 53 回大会 （2019 年度）</h2>
    <section class="mb-5 text-center">準備中</section>
    <div v-for="(v, i) in results" :key="i">
      <h2 class="title-sub">第 {{ v.time }} 回大会 （{{ v.year }} 年度）</h2>
      <section class="mb-5">
        <div class="mb-3 table-responsive">
          <table class="table table-sm table-bordered">
            <tr class="alert-secondary">
              <th></th>
              <th class="text-center">1位</th>
              <th class="text-center">2位</th>
              <th class="text-center">3位</th>
            </tr>
            <tr v-for="(v, i) in v.results" :key="i">
              <td>{{ v.title }}</td>
              <td>{{ v.rank1 }}</td>
              <td>{{ v.rank2 }}</td>
              <td>{{ v.rank3 }}</td>
            </tr>
          </table>
        </div>
        <div class="form-row">
          <div class="col-md-3 col-6 py-1" v-for="(file, j) in v.files" :key="i + '-' + j">
            <a
              class="btn btn-block btn-outline-main text-nowrap"
              target="_blank"
              :href="`/files/santama/${file.file}`"
            >{{ file.title }}</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import results from "./list.json";

export default {
  data: function() {
    return {
      results: results
    };
  }
};
</script>

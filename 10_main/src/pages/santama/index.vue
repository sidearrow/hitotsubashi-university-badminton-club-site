<template>
  <div>
    <h2 class="h2">三多摩大会</h2>
    <div>三多摩地区学生バドミントン選手権大会</div>
    <section class="mb-5">
      <p>第５２回三多摩地区学生バドミントン選手権大会</p>
    </section>
    <h3 class="h3">過去の大会結果</h3>
    <div class="form-inline mb-2">
      <label class="mr-2">年度</label>
      <select class="form-control form-control-sm" v-model="selectYear" style="width:100px">
        <option>すべて</option>
        <option v-for="(year, key) in yearList" :key="key">{{ year }}</option>
      </select>
    </div>
    <table class="table table-bordered">
      <template v-for="(year, key) in yearListView">
      <tr :key="key + 'a'">
        <td class="align-middle bg-light text-center" rowspan="3" style="width:80px">{{ year }}</td>
        <td class="align-middle bg-light text-center" style="width:80px">男子A</td>
        <td>
          <div class="row">
            <div class="col-sm-6 text-center my-1 my-sm-0">
              <a class="btn btn-sm btn-outline-primary mr-1"
                 :href="`/static/pdf/${year}msa_re.pdf`"
                 target="_blank">シングルス</a>
             </div>
            <div class="col-sm-6 text-center">
              <a class="btn btn-sm btn-outline-primary mr-1"
                 :href="`/static/pdf/${year}mda_re.pdf`"
                 target="_blank">ダブルス</a>
             </div>
             </div>
        </td>
      </tr>
      <tr :key="key + 'b'">
        <td class="align-middle bg-light text-center">男子B</td>
        <td>
          <div class="row">
            <div class="col-sm-6 text-center my-1 my-sm-0">
              <a class="btn btn-sm btn-outline-primary mr-1"
                 :href="`/static/pdf/${year}msb_re.pdf`"
                 target="_blank">シングルス</a>
            </div>
            <div class="col-sm-6 text-center my-1 my-sm-0">
              <a class="btn btn-sm btn-outline-primary mr-1"
                 :href="`/static/pdf/${year}mdb_re.pdf`"
                 target="_blank">ダブルス</a>
            </div>
          </div>
        </td>
      </tr>
      <tr :key="key + 'c'">
        <td class="align-middle bg-light text-center">女子</td>
        <td>
          <div class="row">
            <div class="col-sm-6 text-center my-1 my-sm-0">
              <a class="btn btn-sm btn-outline-danger mr-1"
                 :href="`/static/pdf/${year}msa_re.pdf`"
                 target="_blank">シングルス</a>
            </div>
            <div class="col-sm-6 text-center my-1 my-sm-0">
              <a class="btn btn-sm btn-outline-danger mr-1"
                 :href="`/static/pdf/${year}mda_re.pdf`"
                 target="_blank">ダブルス</a>
            </div>
          </div>
        </td>
      </tr>
      </template>
    </table>
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
  watch: {
    selectYear: function () {
      if (this.selectYear === 'すべて') {
        this.yearListView = this.yearList
      } else {
        this.yearListView = [this.selectYear]
      }
    }
  },
  data: function () {
    return {
      selectYear: 'すべて',
      yearList: [2017, 2016, 2015],
      yearListView: [2017, 2016, 2015],
    };
  }
};
</script>
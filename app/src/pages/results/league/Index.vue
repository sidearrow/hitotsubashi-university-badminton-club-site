<template>
  <div>
    <h1 class="title-main">関東学生バドミントン連盟リーグ</h1>
    <div class="row justify-content-center">
      <div class="table-responsive col-md-9">
        <table class="table table-bordered">
          <thead class="bg-light">
            <tr>
              <th class="font-weight-normal" colspan="2">期</th>
              <th class="font-weight-normal">男子</th>
              <th class="font-weight-normal">女子</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(year, i) in leagueResults">
              <tr v-for="(season, j) in year.season" :key="i + '-' + j">
                <th
                  class="font-weight-normal bg-light align-middle"
                  v-if="j === 0"
                  :rowspan="year.season.length"
                >{{ year.year }}</th>
                <th class="font-weight-normal bg-light">{{ season.season }}</th>
                <td>
                  <span class="text-nowrap">
                    <span class="mr-2">{{ season.m }}</span>
                    <span>
                      <cmp-badge :flg="season.mFlg" />
                    </span>
                  </span>
                </td>
                <td>
                  <span class="text-nowrap">
                    <span class="mr-2">{{ season.f }}</span>
                    <span>
                      <cmp-badge :flg="season.fFlg" />
                    </span>
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import leagueResults from "./league_results.json";
import CmpBadge from "./CmpBadge";

export default {
  data: function() {
    return {
      leagueResults: leagueResults
    };
  },
  components: {
    "cmp-badge": CmpBadge
  }
};
</script>

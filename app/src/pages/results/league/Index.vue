<template>
  <div>
    <h1>関東学生バドミントン連盟リーグ</h1>
    <div class="table-responsive mt-5">
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
                <span>{{ season.m }}</span>
                <span
                  class="border border-main rounded text-main px-2 py-1 ml-3"
                  v-if="season.mFlg === 1"
                >昇格</span>
                <span
                  class="border border-secondary rounded text-secondary px-2 py-1 ml-3"
                  v-if="season.mFlg === -1"
                >降格</span>
              </td>
              <td>
                <span>{{ season.f }}</span>
                <span
                  class="border border-main rounded text-main px-2 py-1 ml-3"
                  v-if="season.fFlg === 1"
                >昇格</span>
                <span
                  class="border border-secondary rounded text-secondary px-2 py-1 ml-3"
                  v-if="season.fFlg === -1"
                >降格</span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import leagueResults from "./league_results.json";

export default {
  data: function() {
    return {
      leagueResults: leagueResults
    };
  }
};
</script>

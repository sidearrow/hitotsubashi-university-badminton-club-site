<template>
  <div>
    <div v-if="resultData === null"></div>
    <div v-else>
      <h1 class="hub-h1">{{ resultData.title }}</h1>
      <h2 class="hub-h2">順位</h2>
      <section>
        <table class="table table-bordered">
          <tr v-for="(rank, i) in resultData.rank" :key="i">
            <td class="alert-main">{{ rank.rank }} 位</td>
            <td>{{ rank.callageName }}</td>
            <td>{{ rank.winMatches + ' 勝 ' + rank.loseMatches + ' 敗' }}</td>
          </tr>
        </table>
      </section>
      <h2 class="hub-h2 mt-5">組合せ</h2>
      <section>
        <div class="table-responsive">
          <table class="table table-bordered">
            <tr class="alert-main">
              <td></td>
              <td
                v-for="(cal, i) in resultData.callageList"
                :key="i"
                :style="'width:' + (100 / (resultData.callageList.length + 2) + '%')"
                class="text-center text-nowrap"
              >{{ cal }}</td>
              <td class="text-nowrap">順位</td>
            </tr>
            <tr v-for="(r, i) in resultData.result" :key="i">
              <td class="alert-main text-nowrap">{{ resultData.callageList[i] }}</td>
              <td v-for="(d, i) in r" :key="i" class="text-nowrap">{{ d }}</td>
            </tr>
          </table>
        </div>
      </section>
      <h2 class="hub-h2 mt-5">詳細</h2>
      <section class="row justify-content-center">
        <div class="col-md-6" v-for="(detail, i) in resultData.detail" :key=i>
          <table class="table table-bordered">
            <tr class="alert-main"><td colspan="4">{{ detail.title }}</td></tr>
            <tr v-for="(match, i) in detail.matches" :key="i">
              <td class="text-nowrap align-middle">
                <div v-for="(player, i) in match.player" :key=i>{{ player }}</div>
              </td>
              <td class="text-nowrap align-middle text-center">{{ match.get }}</td>
              <td class="text-nowrap text-center align-middle">
                <div v-for="(set, i) in match.sets" :key=i>{{ set[0] + ' - ' + set[1] }}</div>
              </td>
              <td class="text-nowrap align-middle text-center">{{ match.lose }}</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  created: async function() {
    const leagueDetailId = this.$route.params.leagueId;
    const leagueDetailData = await axios.get(
      "/files/league-results/" + leagueDetailId + ".json"
    );
    this.resultData = leagueDetailData.data;
  },
  data: () => ({
    resultData: null
  })
});
</script>>

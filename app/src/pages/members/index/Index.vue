<template>
  <div>
    <h1 class="title-main">部員情報</h1>
    <section class="mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-sm-6 col-9">
          <cmp-graph :chartdata="chartData.gender" />
        </div>
        <div class="col-lg-4 col-sm-6 col-9">
          <cmp-graph :chartdata="chartData.faculty" />
        </div>
      </div>
    </section>
    <section>
      <b-tabs>
        <b-tab :title="`${grade.grade} 年生`" v-for="(grade, i) in memberData" :key="i" fill>
          <div class="form-row my-3">
            <div
              class="col-lg-4 col-sm-6 py-2"
              v-for="(member, j) in grade.members"
              :key="`${i}-${j}`"
            >
              <div class="card border-dark">
                <div class="card-body">
                  <div
                    :class="`h5 pb-1 ${member.gender === 0 ? 'text-info' : 'text-danger'}`"
                  >{{ member.fullName }}</div>
                  <div class="pb-1">
                    <span
                      class="border border-dark px-1 mb-1 mr-2 d-inline-block"
                    >{{ member.faculty }}</span>
                    <span class="border border-dark px-1 d-inline-block">{{ member.highschool }}</span>
                  </div>
                  <div class="pb-1" v-if="member.positions.length > 0">
                    <span
                      class="border border-dark px-1 mr-1 mb-1 d-inline-block"
                      v-for="(pos, k) in member.position"
                      :key="`${i}-${j}-${k}`"
                    >{{ pos }}</span>
                  </div>
                  <div class="pb-1">{{ member.comment }}</div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import CmpGraph from "./CmpGraph";
import memberData from "./list";

const chartData = {
  gender: {
    labels: ["男子", "女子"],
    datasets: [
      {
        data: [memberData.statistics.gender.m, memberData.statistics.gender.f],
        backgroundColor: ["#26a9ac", "#ac2926"]
      }
    ]
  },
  faculty: {
    labels: ["商学部", "経済学部", "法学部", "社会学部"],
    datasets: [
      {
        data: [
          memberData.statistics.faculty.syo,
          memberData.statistics.faculty.kei,
          memberData.statistics.faculty.hou,
          memberData.statistics.faculty.sya
        ],
        backgroundColor: ["#ac2926", "#2666ac", "#26ac6c", "#ac8e26"]
      }
    ]
  }
};

console.log(chartData);

export default {
  data: function() {
    return {
      memberData: memberData.members,
      chartData: chartData
    };
  },
  components: {
    "cmp-graph": CmpGraph
  }
};
</script>

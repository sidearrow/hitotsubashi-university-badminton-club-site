<template>
  <div>
    <h1 class="hub-h1">部員情報</h1>
    <section>
      <ul class="nav nav-tabs">
        <li class="nav-item" v-for="(grade, i) in memberData" :key="i">
          <a :class="'nav-link' + (activeTabIndex === i ? ' active' : '')" href="#" @click="clickTab(i)">{{ grade.grade }}年生</a>
        </li>
      </ul>
      <div class="tab-content">
        <div :class="'tab-pane' + (activeTabIndex === i ? ' show active' : '')" v-for="(grade, i) in memberData" :key="i">
          <div class="form-row my-3">
            <div class="col-sm-6 py-2" v-for="(member, j) in grade.members" :key="`${i}-${j}`">
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
                      v-for="(pos, i) in member.position"
                      :key="i"
                    >{{ pos }}</span>
                  </div>
                  <div class="pb-1">{{ member.comment }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import memberData from "./membersData.json";

export default Vue.extend({
  data: () => ({
    memberData: memberData.members,
    activeTabIndex: 0,
  }),
  methods: {
    clickTab: function (index) {
      this.activeTabIndex = index;
    },
  },
});
</script>

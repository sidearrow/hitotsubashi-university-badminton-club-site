<template>
  <div>
    <cmp-page-header
      :title="headerTitle"
      :text="headerText"
    />
    <section
      v-for="gradev in gradeList"
      :key="gradev.meta"
      class="mb-5"
    >
      <h2 class="headeline primary--text mb-3">{{ gradev.view }}年生</h2>
      <div
        v-for="(memberv, memberi) in memberData[gradev.meta]"
        :key="memberi"
        class="mb-3"
      >
        <h3 class="subheading">{{ memberv.name }}</h3>
        <div>
          <v-chip
            color="secondary"
            text-color="secondary"
            label
            outline
            small
          >
            <span>{{ memberv.highschool }}</span>
            <span>（{{ memberv.prefecture }}）</span>
          </v-chip>
        </div>
        <div>
          <v-chip
            v-for="(posv, posi) in memberv.position"
            :key="posi"
            v-if="memberv.position[0] !== ''"
            color="primary"
            text-color="primary"
            label
            outline
            small
          >{{ posv }}</v-chip>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cmpPageHeader from '@/components/cmp-page-header'
import memberData from '@/assets/json/member.json'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.member
  },
  created: function () {
    this.memberData = memberData
  },
  components: {
    'cmp-page-header': cmpPageHeader,
  },
  data: function () {
    return {
      headerTitle: '部員紹介',
      headerText: '2017 年 7 月現在、男子 24 名、女子 7 名の計 31 名で活動しています。',
      memberData: {},
      gradeList: [
        { meta: 4, view: "４"},
        { meta: 3, view: "３"},
        { meta: 2, view: "２"},
        { meta: 1, view: "１"},
      ],
    }
  },
};
</script>

<style>
</style>
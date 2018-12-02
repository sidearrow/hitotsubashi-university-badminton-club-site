<template>
  <div>
    <h1>部員紹介</h1>
    <p>2017 年 7 月現在、男子 24 名、女子 7 名の計 31 名で活動しています。</p>
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
        <div>{{ memberv.name }}</div>
        <div>
          <span class="badge bg-main text-white">{{ memberv.highschool + '（' + memberv.prefecture + '）' }}</span>
        </div>
        <div>
          <span
            v-for="(posv, posi) in memberv.position"
            :key="posi"
            v-if="memberv.position[0] !== ''"
            class="badge bg-sub text-white mr-1"
          >{{ posv }}</span>
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
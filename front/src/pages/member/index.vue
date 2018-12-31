<template>
  <div>
    <h1>部員紹介</h1>
    <p>2017 年 7 月現在、男子 24 名、女子 7 名の計 31 名で活動しています。</p>
    <cmp-switch-buttons
      :now="nowGrade"
      @switch="switchGrade"
    />
    <div
      v-for="(gradeData, key) in memberData" :key="key"
      v-if="key === '_' + nowGrade"
    >
      <div
        class="row py-2"
        v-for="(member, j) in gradeData" :key="j"
      >
        <div class="col-12 col-sm-auto mb-1 mb-sm-0 text-center bg-light">
          <img src="static/img/in-preparation.png" />
        </div>
        <div class="pl-3">
          <h6
            :class="member.sx === 'm' ? 'text-primary' : 'text-danger'"
          >{{ member.name }}</h6>
          <div class="py-2">
            <span class="border border-dark rounded p-1">{{ member.gakubu }}</span>
            <span class="border border-dark rounded p-1 ml-2">{{ member.from }}</span>
          </div>
          <div>
            <span
              class="border border-dark rounded p-1 mr-1"
              v-for="(pos, k) in member.pos" :key="k"
            >{{ pos }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import memberData from '@/assets/json/member.json'
import cmpSwitchButtons from './cmp-switch-buttons'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.member
  },
  created: function () {
    //this.memberData = memberData
  },
  methods: {
    switchGrade: function (grade) {
      this.nowGrade = grade
    }
  },
  components: {
    'cmp-switch-buttons': cmpSwitchButtons,
  },
  data: function () {
    return {
      nowGrade: 1,
      memberData: memberData,
    }
  },
};
</script>
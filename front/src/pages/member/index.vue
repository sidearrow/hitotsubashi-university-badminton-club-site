<template>
  <div>
    <h1>部員紹介</h1>
    <p>2017 年 7 月現在、男子 24 名、女子 7 名の計 31 名で活動しています。</p>
    <cmp-switch-buttons
      :now="2 /*nowGrade */"
      @switch="switchGrade"
    />
    <div
      v-for="(gradeData, i) in memberData" :key="i"
      v-if="i == nowGrade"
    >
      <div
        class="row py-2"
        v-for="(member, j) in gradeData" :key="j"
      >
        <div>
          <img src="static/img/150x150.png" />
        </div>
        <div class="ml-3">
          <div>{{ member.name }}</div>
          <div>
            <span class="badge bg-main text-white">{{ `${member.highschool} (${member.prefecture})` }}</span>
          </div>
          <div>
            <span
              class="badge bg-sub text-white mr-1"
              v-for="(pos, k) in member.position" :key="k"
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
      console.log(grade)
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
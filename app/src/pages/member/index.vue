<template>
  <div>
    <cmp-page-title title="部員紹介" />
    <p>2017 年 7 月現在、男子 24 名、女子 7 名の計 31 名で活動しています。</p>

    <!-- 部員数表 -->
    <table class="table table-bordered my-5" style="table-layout:fixed">
      <tbody>
        <tr class="bg-light">
          <td class="text-center">学年</td>
          <td class="text-center">男子</td>
          <td class="text-center">女子</td>
          <td class="text-center">計</td>
        </tr>
        <tr v-for="(data, key) in gradeData.grade" :key="key">
          <td class="bg-light text-center">{{ data[0] }}</td>
          <td class="text-primary text-right">{{ data[1] }}</td>
          <td class="text-danger text-right">{{ data[2] }}</td>
          <td class="text-right">{{ data[1] + data[2] }}</td>
        </tr>
      </tbody>
    </table>


    <div>
      <select class="form-control" v-model="nowGrade"
              style="width:100px">
        <option value="4">４回生</option>
        <option value="3">３回生</option>
        <option value="2">２回生</option>
        <option value="1">１回生</option>
      </select>
    </div>
    <div class="row py-3"
         v-for="(member, key) in memberDataView.data" :key="key"
    >
      <div class="col-auto">
        <img :src="'static/img/member/' + member.img + '.jpg'"
             width="100" height="100"
        />
      </div>
      <div class="col pl-3">
        <h6
          :class="member.sx === 'm' ? 'text-primary' : 'text-danger'"
        >{{ member.name }}</h6>
        <div class="py-2">
          <span class="border border-dark rounded px-1 mb-1 mr-2 d-inline-block">{{ member.gakubu }}</span>
          <span class="border border-dark rounded px-1 d-inline-block">{{ member.from }}</span>
        </div>
        <div>
          <span
            class="border border-dark rounded px-1 mr-1 mb-1 d-inline-block"
            v-for="(pos, k) in member.pos" :key="k"
          >{{ pos }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import memberData from '@/assets/json/member.json'

export default {
  beforeCreate: function () {
    document.title = this.$config.title.member
  },
  watch: {
    nowGrade: function (grade) {
      this.memberDataView = memberData.filter(v => v.grade === Number(grade))[0]
    }
  },
  data: function () {
    return {
      nowGrade: '4',
      gradeData: {
        grade: [
          ['４回生', 3, 2],
          ['３回生', 9, 1],
          ['２回生', 6, 2],
          ['１回生', 4, 0],
          ['計', 22, 4],
        ],
      },
      memberDataView: memberData.filter(v => v.grade === 4)[0],
    }
  },
  components: {
    'cmp-page-title': cmpPageTitle,
  }
};
</script>
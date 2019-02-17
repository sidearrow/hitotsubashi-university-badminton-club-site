<template>
  <div>
    <h1>部員紹介</h1>
    <p>2017 年 7 月現在、男子 24 名、女子 7 名の計 31 名で活動しています。</p>
    <table class="table table-bordered my-5">
      <thead>
        <tr>
          <th>学年</th>
          <th>男子</th>
          <th>女子</th>
          <th>計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, key) in gradeData.grade" :key="key">
          <th>{{ data[0] }}</th>
          <td class="text-primary">{{ data[1] }}</td>
          <td class="text-danger">{{ data[2] }}</td>
          <td>{{ data[1] + data[2] }}</td>
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
          ['', 22, 4],
        ],
      },
      memberData: memberData,
      memberDataView: memberData.filter(v => v.grade === 4)[0],
    }
  },
};
</script>
<template>
<div>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>姓</th>
          <th>名</th>
          <th>入学年度</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(member, i) in members" :key="i"
        >
          <td>
            <button
              class="btn btn-sm btn-primary"
              @click="$router.push(`/members/${i}/edit`)"
            >編集</button>
          </td>
          <td>{{ member.name_family }}</td>
          <td>{{ member.name_given }}</td>
          <td>{{ member.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  created: function () {
    this.fetchMembersData()
  },
  methods: {
    fetchMembersData: function () {
      this.$axios
        .get('/members')
        .then(res => this.members = res.data)
    }
  },
  data: function () {
    return {
      members: [],
    }
  }
}
</script>
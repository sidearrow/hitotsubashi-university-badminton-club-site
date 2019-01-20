<template>
<div>
  <div>
    <router-link
      to="/members/new"
      class="btn btn-primary"
    >新規作成</router-link>
  </div>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>姓</th>
          <th>名</th>
          <th>入学年度</th>
          <th>高校</th>
          <th>都道府県</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(member, i) in members" :key="i"
        >
          <td>
            <button
              class="btn btn-sm btn-primary"
              @click="$router.push(`/members/${member.id}/edit`)"
            >編集</button>
            <button
              class="btn btn-sm btn-danger ml-1"
              @click="deleteMember(member.id)"
            >削除</button>
          </td>
          <td class="text-monospace">{{ member.id }}</td>
          <td>{{ member.name_family }}</td>
          <td>{{ member.name_given }}</td>
          <td>{{ member.year }}</td>
          <td>{{ member.highschool }}</td>
          <td>{{ member.prefecture }}</td>
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
    },
    deleteMember: function (id) {
      if (confirm(id + ' を削除しますか')) {
        this.$axios
          .delete(`/members/${id}`)
          .then(() => this.fetchMembersData())
      }
    }
  },
  data: function () {
    return {
      members: [],
    }
  }
}
</script>
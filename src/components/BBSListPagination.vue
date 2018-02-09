<template>
  <div>
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <router-link class="page-link" to="/bbs/list/1">&laquo;</router-link>
      </li>
      <li class="page-item" :id="`pagenum-${pageNum}` "v-for="pageNum in pageNums">
        <router-link class="page-link" :to="'/bbs/list/' + pageNum">{{ pageNum }}</router-link>
      </li>
      <li class="page-item">
        <router-link class="page-link" to="/bbs/list/5">&raquo;</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created: function () {
    const pageNum = this.$route.params.pagenum;
    if (document.getElementById(`pagenum-${pageNum}`)) {
      document.getElementById(`pagenum-${pageNum}`).classList.add('active');
    }
  },
  data() {
    return {
      pageNums: [1,2,3,4,5],
    };
  },
  watch: {
    '$route': function () {
      document.querySelector('.page-item.active').classList.remove('active');
      const pageNum = this.$route.params.pagenum;
      if (document.getElementById(`pagenum-${pageNum}`)) {
        document.getElementById(`pagenum-${pageNum}`).classList.add('active');
      }
    },
  },
};
</script>
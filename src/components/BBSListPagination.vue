<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <router-link class="page-link" to="/bbs/list/1"><<</router-link>
        </li>
        <li class="page-item" v-for="pageNum in pageNums">
          <router-link class="page-link" :to="'/bbs/list/' + pageNum">{{ pageNum }}</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/bbs/list/5">>></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNums: [1,2,3,4,5],
    };
  },
};
</script>
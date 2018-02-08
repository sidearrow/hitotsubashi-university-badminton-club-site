<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <router-link class="page-link"></router-link>
        </li>
        <li class="page-item" v-for="pageNum in pageNums">
          <router-link class="page-link">{{ pageNum }}</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link">>></router-link>
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
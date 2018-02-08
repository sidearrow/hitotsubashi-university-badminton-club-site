<template>
  <div>
    list
    <pagination></pagination>
  </div>
</template>

<script>
import pagination from './BBSListPagination.vue';

export default {
  components: {
    pagination: pagination,
  },
  data () {
    return {
      test: 'aaa',
    }
  },
}
</script>
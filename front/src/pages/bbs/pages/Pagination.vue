<template>
  <div class="d-flex">
    <ul class="pagination mx-auto">
      <li
        v-if="isFirst"
        class="page-item disabled"
      >
        <span class="page-link">&laquo;</span>
      </li>
      <li
        v-else
        class="page-item"
      >
        <router-link class="page-link" to="/bbs/pages/1">&laquo;</router-link>
      </li>
      <li
        v-for="v in pages"
        :class="'page-item' + ((now == v) ? ' active' : '')"
      >
        <router-link class="page-link" :to="`/bbs/pages/${v}`">{{ v }}</router-link>
      </li>
      <li
        v-if="isLast"
        class="page-item disabled"
      >
        <span class="page-link">&raquo;</span>
      </li>
      <li
        v-else
        class="page-item"
      >
        <router-link class="page-link" :to="`/bbs/pages/${max}`">&raquo;</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    init: function () {
      const now = parseInt(this.$route.params.page)
      const max = Math.ceil(this.count/20)
      this.now = now
      this.max = max
      this.isFirst = false
      this.isLast = false

      if (max === 1) {
        this.pages = [1]
        this.isFirst = true
        this.isLast = true
      } else if (max === 2) {
        this.pages = [1, 2]
        if (now === 1) {
          this.isFirst = true
        } else {
          this.isLast = true
        }
      } else {
        if (now === 1) {
          this.pages = [1, 2, 3]
          this.isFirst = true
        } else if (now === this.max) {
          this.pages = [now-2, now-1, now]
          this.isLast = true
        } else {
          this.pages = [now-1, now, now+1]
        }     
      }
    }
  },
  props: ['count', 'pageNum'],
  data: function () {
    return {
      now: 0,
      max: 0,
      pages: [],
      isFirst: true,
      isLast: true,
    }
  },
  watch: {
    'pageNum': function () {
      this.init()
    },
    'count': function () {
      this.init()
    }
  },
}
</script>
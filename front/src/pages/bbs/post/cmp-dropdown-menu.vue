<template>
  <div class="dropdown d-inline-block">
    <a class="btn btn-sm bg-white dropdown-toggle" @click="toggleDropdown"></a>
    <div :class="`dropdown-menu dropdown-menu-right${(isShow) ? ' show' : ''} text-08rem`">
      <a
        class="dropdown-item"
        v-if="!isComment"
        @click="clickEdit()">Edit</a>
      <a
        class="dropdown-item"
        @click="clickDelete()">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    isComment: Boolean
  },
  data: function () {
    return {
      isShow: false,
    }
  },
  methods: {
    toggleDropdown: function () {
      this.isShow = !this.isShow
    },
    clickEdit: function () {
      this.$router.push(`/bbs/edit/${this.id}`)
    },
    clickDelete: function () {
      this.$emit('click-delete')
    },
  }
}
</script>
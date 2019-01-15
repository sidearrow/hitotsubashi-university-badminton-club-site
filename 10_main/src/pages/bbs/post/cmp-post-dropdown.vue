<template>
<div class="dropdown text-right">
  <a
    class="dropdown-toggle"
    @click="toggle"
  ></a>
  <div
    :class="'dropdown-menu dropdown-menu-right' + (isOpen ? ' show' : '')">
    <router-link
      class="dropdown-item"
      :to="'/bbs/posts/' + postId + '/edit'"
    >編集</router-link>
    <router-link
      class="dropdown-item"
      :to="'/bbs/posts/' + postId + '/delete'"
    >削除</router-link>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  },
  data: function () {
    return {
      isOpen: false,
    }
  },
  props: {
    postId: String,
  }
}
</script>
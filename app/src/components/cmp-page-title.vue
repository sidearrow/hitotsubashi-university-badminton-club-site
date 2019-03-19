<template>
  <div class="pb-5">
    <h2 class="text-center h2">{{ title }}</h2>
    <hr class="w-75 w-md-50 bg-dark" style="height:1px" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

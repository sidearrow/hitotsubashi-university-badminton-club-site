<template>
  <div class="pb-5">
    <h1 class="text-center" style="color:#ac2926">{{ title }}</h1>
    <hr class="w-75 w-md-50" style="border-color:#ac2926" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>
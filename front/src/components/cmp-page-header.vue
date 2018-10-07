<template>
  <section class="mt-5 mb-5">
    <h1 class="display-1 primary--text">{{ title }}</h1>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    text : String,
  }
}
</script>
<template>
  <div>
    <h1 class="mdc-typography--headline4">{{ title }}</h1>
    <div>
      <ol class="breadcrumb bg-transparent">
        <li class="breadcrumb-item active">
          <router-link to="/">Home</router-link>
        </li>
        <li
          class="breadcrumb-item active"
          v-for="v in items"
        >
          <router-link :to="v.path">{{ v.text }}</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'items'],
};
</script>
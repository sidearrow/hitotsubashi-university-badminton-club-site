<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <ol class="breadcrumb bg-transparent">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li
          :class="'breadcrumb-item' + ((i === items.length-1) ? ' active' : '')"
          v-for="(v, i) in items"
        >
          <span v-if="i === items.length-1">{{ v[0] }}</span>
          <router-link :to="v[1]" v-else>{{ v[0] }}</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
  },
};
</script>
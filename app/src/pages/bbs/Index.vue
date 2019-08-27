<template>
  <div>
    <h1>掲示板</h1>
    <button @click="submit">送信</button>
  </div>
</template>

<script>
import { Post, postDelete } from '../../firebase/bbs'

export default {
  methods: {
    submit: async () => {
      postDelete('0r4XFiabbDkw1RmWUYQj')
      /*
     const data = await bbsGet()
     console.log(data)
      */
    }
  }
}
</script>

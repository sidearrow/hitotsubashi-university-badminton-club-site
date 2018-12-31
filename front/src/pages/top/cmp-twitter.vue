<template>
<div class="px-0">
  <div class="card">
    <div
      class="card-header d-flex justify-content-between"
      @click="toggle"
    >
      <span>Twitter</span>
      <div v-if="isShow"><i class="fas fa-angle-down"></i></div>
      <div v-else><i class="fas fa-angle-up"></i></div>
    </div>
    <div
      :class="'card-body collapse' + (isShow ? ' show' : '')"
    >
      <a
        class="twitter-timeline"
        id="twitter-timeline"
        data-lang="ja"
        data-height="600"
        href="https://twitter.com/hit_u_bad?ref_src=twsrc%5Etfw"
      >Tweets by hit_u_bad</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      isShow: true,
    }
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
    }
  },
  mounted: function () {
    if (!document.getElementById('twitter-wiget')) {
      const timeline = document.getElementById('twitter-timeline')
      const script = document.createElement('script')
      script.id = 'twitter-wiget'
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      timeline.parentNode.insertBefore(script, timeline.nextSibling)
    }
  },
}
</script>
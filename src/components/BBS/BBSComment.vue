<template>
  <div id="disqus_thread"></div>
</template>

<script>
import config from '@/Config';

export default {
  mounted: function () {
    const script = document.createElement('script');
    script.innerHTML = config.disqus.script(location.href, this.$router.id);
    const target = document.getElementById('disqus_thread');
    target.parentNode.insertBefore(script, target.nextSibling);
  },
}
</script>

<style>
#disqus_thread {
  margin-top: 40px;
}
</style>
<template>
<div>
  <cmp-page-title title="掲示板 新規投稿" />
  <cmp-base
    backTo="/bbs/posts"
  />
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import cmpBase from './cmp-base'

export default {
  components: {
    'cmp-base': cmpBase,
    'cmp-page-title': cmpPageTitle,
  },
}
</script>

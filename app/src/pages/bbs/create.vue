<template>
<div>
  <cmp-page-title title="掲示板 新規投稿" />
  <cmp-form ref="form" />
  <div class="text-center mt-2">
    <button class="btn btn-sm btn-outline-primary"
            @click="clickConfirm()">確認</button>
    <router-link to="/bbs/posts"
                 class="btn btn-sm btn-outline-secondary ml-2">キャンセル</router-link>
  </div>
</div>
</template>

<script>
import cmpPageTitle from '@/components/cmp-page-title'
import cmpForm from './cmp-form'

export default {
  components: {
    'cmp-form': cmpForm,
    'cmp-page-title': cmpPageTitle,
  },
  methods: {
    clickConfirm: function () {
      if (this.$refs.form.validate()) {
        this.$route.push('/bbs/create-confirm')
      }
    }
  }
}
</script>

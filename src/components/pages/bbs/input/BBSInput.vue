<template>
  <div>
    <article>
      <section>
        <div class="form-group">
          <label for="slf-bbs-input-name">名前</label>
          <input type="text" class="form-control" id="slf-bbs-input-name">
        </div>
        <div class="form-group">
          <label for="slf-bbs-input-title">タイトル</label>
          <input type="text" class="form-control" id="slf-bbs-input-title">
        </div>
        <div class="form-group">
          <label for="slf-bbs-input-content">本文</label>
          <textarea class="form-control" rows="20" cols="60" id="slf-bbs-input-content" style="font-size:12px;line-height:1.1;"></textarea>
        </div>
        <div class="form-group">
          <label for="slf-bbs-input-password">パスワード</label>
          <input type="password" class="form-control" id="slf-bbs-input-password">
        </div>
      </section>
      <div class="mt-2">
        <p v-for="v in errMsg">{{ v }}</p>
      </div>
      <div class="text-center mt-2">
        <button class="mdc-button mdc-button--raised" @click="clickSubmit()">投稿</button>
      </div>
      <div class="mt-2">
        <router-link to="/bbs">←戻る</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import bbsFunction from '@/components/pages/bbs/bbsFunction';

export default {
  methods: {
    clickSubmit: function () {
      const data = new bbsFunction.data([
        document.getElementById('slf-bbs-input-name').value,
        document.getElementById('slf-bbs-input-title').value,
        document.getElementById('slf-bbs-input-content').value,
        document.getElementById('slf-bbs-input-password').value,
      ]);

      if (data.isError) {
        this.errMsg = data.errorMsg;
      } else {
        bbsFunction.set(data.get());
        this.$router.push({path: '/bbs'});
      }
    }
  },
  data: function () {
    return {
      errMsg: [],
    }
  }
}
</script>

<style>
</style>
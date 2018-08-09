<template>
  <div>
    <article>
      <section>
        <div class="slf-dblock">
          <div class="mdc-text-field mdc-text-field--dense mdc-text-field--fullwidth">
            <input type="text" class="mdc-text-field__input" id="slf-bbs-input-name">
            <label class="mdc-floating-label" for="slf-bbs-input-name">名前</label>
            <div class="mdc-line-ripple"></div>
          </div>
        </div>
        <div class="slf-dblock">
          <div class="mdc-text-field mdc-text-field--dense mdc-text-field--fullwidth">
            <input type="text" class="mdc-text-field__input" id="slf-bbs-input-title">
            <label class="mdc-floating-label" for="slf-bbs-input-title">タイトル</label>
            <div class="mdc-line-ripple"></div>
          </div>
        </div>
        <div class="slf-dblock">
          <div class="mdc-text-field mdc-text-field--textarea mdc-text-field--dense mdc-text-field--fullwidth">
            <label class="mdc-floating-label" for="slf-bbs-input-content">本文</label>
            <textarea class="mdc-text-field__input" rows="20" cols="60" id="slf-bbs-input-content" style="font-size:12px;line-height:1.1;"></textarea>
          </div>
        </div>
        <div class="slf-dblock">
          <div class="mdc-text-field mdc-text-field--dense mdc-text-field--fullwidth">
            <input type="password" class="mdc-text-field__input" id="slf-bbs-input-password">
            <label class="mdc-floating-label" for="slf-bbs-input-password">パスワード</label>
            <div class="mdc-line-ripple"></div>
          </div>
        </div>
      </section>
      <div class="slf-mtop-20">
        <p v-for="v in errMsg">{{ v }}</p>
      </div>
      <div class="slf-talign-center slf-mtop-20">
        <button class="mdc-button mdc-button--raised" @click="clickSubmit()">投稿</button>
      </div>
      <div class="slf-mtop-20">
        <router-link to="/bbs">←戻る</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield';

import bbsFunction from '@/components/pages/bbs/bbsFunction';

export default {
  mounted() {
    document.querySelectorAll('.mdc-text-field').forEach((v) => {
      new MDCTextField(v);
    })
  },
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
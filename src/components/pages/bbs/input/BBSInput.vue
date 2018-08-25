<template>
  <div>
    <article>
      <section>
        <div class="form-group">
          <label>名前</label>
          <input type="text" class="form-control" v-model="input.name">
        </div>
        <div class="form-group">
          <label>タイトル</label>
          <input type="text" class="form-control" v-model="input.title">
        </div>
        <div class="form-group">
          <label>本文</label>
          <textarea class="form-control" rows="20" cols="60" v-model="input.content" style="font-size:12px;line-height:1.1;"></textarea>
        </div>
        <div class="form-group">
          <label>パスワード</label>
          <input type="password" class="form-control" v-model="input.password">
        </div>
      </section>
      <div class="mt-2">
        <p v-for="v in errMsg">{{ v }}</p>
      </div>
      <div class="text-center mt-2">
        <button class="btn bg-main text-white" @click="clickSubmit()">投稿</button>
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
  mounted: function () {
    const tmp = sessionStorage.getItem('password');
    if (tmp === null) {
      return;
    }

    this.id = this.$route.query.id;
    bbsFunction.select(this.id, (res) => {
      if (res.password === tmp) {
        this.input.name = res.name;
        this.input.title = res.title;
        this.input.content = res.content;
        this.input.password = res.password;
      }
      this.isEdit = true;
    });
  },
  methods: {
    clickSubmit: function () {
      const data = new bbsFunction.data([
        this.input.name,
        this.input.title,
        this.input.content,
        this.input.password,
      ]);

      if (data.isError) {
        this.errMsg = data.errorMsg;
      } else {
        if (this.isEdit) {
          bbsFunction.update(this.id, data.get());
        } else {
          bbsFunction.set(data.get());
        }
        this.$router.push({path: '/bbs'});
      }
    }
  },
  data: function () {
    return {
      isEdit: false,
      id: null,
      input: {
        name: '',
        title: '',
        content: '',
        password: '',
      },
      errMsg: [],
    }
  }
}
</script>

<style>
</style>
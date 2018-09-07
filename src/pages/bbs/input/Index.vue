<template>
  <div>
    <article>
      <section>
        <div class="form-group">
          <label>名前</label>
          <input type="text" class="form-control" v-model="post.contributor">
        </div>
        <div class="form-group">
          <label>タイトル</label>
          <input type="text" class="form-control" v-model="post.title">
        </div>
        <div class="form-group">
          <label>本文</label>
          <textarea class="form-control" rows="20" cols="60" v-model="post.content" style="font-size:12px;line-height:1.1;"></textarea>
        </div>
        <div class="form-group">
          <label>パスワード</label>
          <input type="password" class="form-control" v-model="post.password">
        </div>
      </section>
      <div class="mt-2">
        <p v-for="v in errMsg">{{ v }}</p>
      </div>
      <div class="text-center mt-2">
        <button class="btn bg-main text-white" @click="clickSubmit()">投稿</button>
      </div>
      <div class="mt-2">
        <router-link to="/bbs/pages/1">←戻る</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import { buildApiPath } from '@/util'
import bbsFunction from '@/pages/bbs/bbsFunction';

export default {
  mounted: function () {
    if (sessionStorage.getItem('edit') === '1') {
      this.post.opassword = sessionStorage.getItem('password');
      this.post.id = sessionStorage.getItem('id');
      this.post.title = sessionStorage.getItem('title');
      this.post.contributor = sessionStorage.getItem('contributor');
      this.post.content = sessionStorage.getItem('content');
      this.isEdit = true;
    }
  },
  methods: {
    clickSubmit: function () {
      const data = new bbsFunction.data([
        this.post.contributor,
        this.post.title,
        this.post.content,
        this.post.password, 
      ])

      if (data.isError) {
        this.errMsg = data.errorMsg;
      } else {
        if (this.isEdit) {
          axios.put(buildApiPath(`bbs/posts/${this.id}`), data.getPatchData(this.opassword));
        } else {
          axios.post(buildApiPath('bbs/posts'), data.getPostData())
        }
        this.$router.push({path: '/bbs/pages/1'});
      }
    }
  },
  data: function () {
    return {
      isEdit: false,
      post: {
        id: '',
        contributor: '',
        title: '',
        content: '',
        password: '',
        opassword: '',
      },
      errMsg: [],
    }
  }
}
</script>
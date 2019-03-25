<template>
<div>
  <div class="h3">{{ post.title }}</div>
  <div class="text-right my-3">
    <router-link class="btn btn-outline-success mr-2 px-4"
                 :to="`/bbs/posts/${postId}/edit`">編集</router-link>
    <router-link class="btn btn-outline-danger px-4"
                 :to="`/bbs/posts/${postId}/delete`">削除</router-link>
  </div>
  <div class="mb-5">
    <span>{{ post.author }}</span>
    <span class="ml-2 text-monospace">{{ post.createdAt }}</span>
  </div>
  <div class="ws-preline mb-3">{{ post.content }}</div>

  <!-- コメント -->
  <div class="card mt-5">
    <div class="card-header">コメント</div>
    <div class="card-body">
      <div v-for="(v, i) in post.comments" :key="i" class="mb-5">
        <!-- コメント 未削除 -->
        <div v-if="!v.isDelete">
          <div class="mt-3">
            <span>{{ v.author }}</span>
            <span class="ml-2 text-monospace">{{ v.createdAt }}</span>
          </div>
          <div v-show="deleteCommentsId !== i" class="text-right">
            <button @click="clickDeleteOpen(i)" class="btn btn-sm btn-outline-danger">削除</button>
          </div>
          <div v-show="deleteCommentsId === i"
               class="text-right" style="width:200px;margin-left:auto">
            <div class="input-group">
              <input type="password" placeholder="削除キー" maxlength="4"
                     :class="'form-control form-control-sm' + (isErrorCommentsPassword ? ' is-invalid' : '')" v-model="commentsPassword">
              <div>
                <button @click="clickDelete(i)"
                        class="btn btn-sm btn-outline-danger">削除</button>
                <button @click="clickCancel()"
                        class="btn btn-sm btn-outline-secondary">ｷｬﾝｾﾙ</button>
              </div>
              <small class="form-text text-muted">半角数字 4 字で入力してください</small>
              <div class="invalid-feedback text-left">パスワードが間違っています</div>
            </div>
          </div>
        <p class="ws-preline">{{ v.content }}</p>
        </div>
        <!-- コメント 削除 -->
        <div v-if="v.isDelete">
          <div class="py-2">このコメントは削除されました</div>
        </div>
        <hr class="my-2">
      </div>
      <cmp-input-comment @done-post="fetchData"/>
    </div>
  </div>

  <div class="mt-3">
    <router-link to="/bbs/posts">一覧へ</router-link>
  </div>
</div>
</template>

<script>
import CmpInputComment from './cmp-input-comment'

export default {
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      const res = await this.$http.get('/bbs/posts/' + this.postId)
      this.post = res.data
    },
    clickDeleteOpen: function (cid) {
      this.deleteCommentsId = cid
    },
    clickDelete: async function (cid) {
      const url = `/bbs/posts/${this.postId}/comments/${cid}?password=${this.commentsPassword}`;
      const res = await this.$http.delete(url)
      if (res.data.isSuccess) {
        this.fetchData()
      } else {
        this.isErrorCommentsPassword = true
      }
    },
    clickCancel: function () {
      this.deleteCommentsId = null
      this.commentsPassword = ''
      this.isErrorCommentsPassword = false
    }
  },
  data () {
    return {
      post: {},
      postId: this.$route.params.id,
      deleteCommentsId: null,
      commentsPassword: '',
      isErrorCommentsPassword: false,
    };
  },
  components: {
    'cmp-input-comment': CmpInputComment,
  }
}
</script>

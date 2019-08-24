<template>
  <div>
    <h1 class="mb-5">みずとり会 ログイン</h1>
    <div class="alert alert-info">
      <div>みずとり会のページです。<br/>コンテンツを見るにはログインしてください。</div>
    </div>
    <form @submit.prevent="submit">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="form-group">
            <label>パスワード</label>
            <input type="password" class="form-control" />
            <small>現会長の名前をローマ字表記・英小文字のみで入力してください</small>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-md-4">
          <button type="submit" class="btn btn-block btn-main">ログイン</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/firestore'

export default {
  methods: {
    submit: function (e) {
      db.collection('auth').where('password', '==', '').get().then((snap) => {
        console.log(snap)
      })
    },
  },
}
</script>

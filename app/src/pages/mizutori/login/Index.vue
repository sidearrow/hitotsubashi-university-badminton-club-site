<template>
  <div>
    <h1 class="title-main">みずとり会 ログイン</h1>
    <form @submit.prevent="submit">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="alert alert-info mb-5">
            <div>
              みずとり会のページです。
              <br />コンテンツを見るにはログインしてください。
            </div>
          </div>
          <div class="form-group">
            <label>パスワード</label>
            <input
              type="password"
              v-model="inputPassword"
              :class="'form-control ' + (isError ? 'is-invalid' : '')"
            />
            <div class="invalid-feedback">{{ errorMessage }}</div>
            <small>現会長の名前をローマ字表記・英小文字のみで入力してください</small>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-md-4">
          <button type="submit" class="btn btn-block btn-outline-main">ログイン</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import mizutoriAuth from "@/firebase/mizutori-auth";

export default {
  methods: {
    submit: async function() {
      this.isError = false;
      this.errorMessage = "";

      if (this.inputPassword.length === 0) {
        this.isError = true;
        this.errorMessage = "パスワードは必ず入力してください";
        return;
      }

      try {
        await mizutoriAuth.login(this.inputPassword);
      } catch (err) {
        console.log(err);
        this.isError = true;
        this.errorMessage = "パスワードが間違っています";
        return;
      }
      this.$router.push("/mizutori");
    }
  },
  data: function() {
    return {
      inputPassword: "",
      isError: false,
      errorMessage: ""
    };
  }
};
</script>

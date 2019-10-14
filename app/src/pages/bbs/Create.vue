<template>
  <div>
    <h1 class="mb-5">掲示板 新規投稿</h1>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="form-group">
          <label>タイトル</label>
          <input
            :class="`form-control form-control ${ errors.title === null ? '' : 'is-invalid' }`"
            v-model="input.title"
            maxlength="50"
            :readonly="isConfirm"
          />
          <div class="invalid-feedback">{{ errors.title }}</div>
        </div>

        <div class="form-group">
          <label>投稿者名</label>
          <input
            :class="`form-control form-control ${ errors.author === null ? '' : 'is-invalid' }`"
            v-model="input.author"
            maxlength="50"
            :readonly="isConfirm"
          />
          <div class="invalid-feedback">{{ errors.author }}</div>
        </div>

        <div class="form-group">
          <label>投稿内容</label>
          <textarea
            :class="`form-control form-control ${ errors.content === null ? '' : 'is-invalid' }`"
            rows="15"
            maxlength="2000"
            v-model="input.content"
            :readonly="isConfirm"
          ></textarea>
          <div class="invalid-feedback">{{ errors.content }}</div>
        </div>

        <div class="form-group">
          <label>編集/削除キー</label>
          <input
            type="password"
            maxlength="4"
            :class="`form-control form-control ${ errors.password === null ? '' : 'is-invalid' }`"
            v-model="input.password"
            :readonly="isConfirm"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-md-4">
        <button
          class="btn btn-block btn-outline-main"
          @click="submit"
        >{{ isConfirm ? '投稿' : '投稿確認' }}</button>
      </div>
      <div class="col-md-4 mt-md-0 mt-2">
        <button v-if="isConfirm" class="btn btn-block btn-outline-secondary" @click="clickBackToInput">編集へ戻る</button>
        <router-link v-else class="btn btn-block btn-outline-secondary" to="/bbs">戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit: function() {
      if (this.isConfirm) {
        console.log("submit");
        return;
      }
      this.isConfirm = true;
    },
    clickBackToInput: function () {
      this.isConfirm = false
    }
  },
  data: function() {
    return {
      isConfirm: false,
      input: {
        title: "",
        author: "",
        content: "",
        password: ""
      },
      errors: {
        title: null,
        author: null,
        content: null,
        password: null,
      }
    };
  }
};
</script>

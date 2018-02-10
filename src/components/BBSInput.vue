<template>
  <div>
    <div class="mx-3">
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Name</label>
        <input name="name" type="text" class="form-control form-control-sm col-sm-9">
        <div class="invalid-feedback">文字列が入力されていないか、長すぎます。</div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Title</label>
        <input name="title" type="text" class="form-control form-control-sm col-sm-9">
        <div class="invalid-feedback">文字列が入力されていないか、長すぎます。</div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Content</label>
        <textarea name="content" class="form-control form-control-sm col-sm-9" rows="10"></textarea>
        <div class="invalid-feedback">文字列が入力されていないか、長すぎます。</div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Password</label>
        <input name="password" type="password" class="form-control form-control-sm col-sm-9">
        <small class="form-text text-muted">4桁の半角数字で入力してください。</small>
      </div>
      <div class="text-center mt-5">
        <button class="btn btn-primary" @click="clickPost">投稿</button>
        <button class="btn btn-secondary"><router-link to="/bbs/list/1" class="text-white">戻る</router-link></button>
      </div>
      <div id="success-msg" class="alert alert-success mt-3 d-none">投稿が完了しました。</div>
      <div id="error-msg" class="alert alert-danger mt-3 d-none">入力エラーがあります。</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickPost: function (event) {
      event.target.setAttribute('disabled', '');

      let isError = false;

      const name = document.querySelector('input[name=name]').value.trim();
      const title = document.querySelector('input[name=title]').value.trim();
      const content = document.querySelector('textarea[name=content]').value.trim();
      const password = document.querySelector('input[name=password]').value.trim();

      if (name.length === 0 || name.length > 30) {
        document.querySelector('input[name=name]').classList.add('is-invalid');
        isError = true;
      }
      if (title.length === 0 || title.length > 50) {
        document.querySelector('input[name=title]').classList.add('is-invalid');
        isError = true;
      }
      if (content.length === 0 || content.length > 500) {
        document.querySelector('textarea[name=content]').classList.add('is-invalid');
        isError = true;
      }
      if (password.match(/^\d{4}$/) === null) {
        document.querySelector('input[name=password]').classList.add('is-invalid');
        isError = true;
      }

      if (isError) {
        document.getElementById('error-msg').classList.remove('d-none');
        event.target.removeAttribute('disabled');
      } else {
        document.getElementById('success-msg').classList.remove('d-none');
      }
    },
  }
};
</script>
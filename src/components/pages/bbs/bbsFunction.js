export default {
  data: class {
    constructor([contributor, title, content, password]) {
      var isError = false;
      var errorMsg = [];
      if (contributor.trim().length === 0 || !name.length > 50) {
        isError = true;
        errorMsg.push("名前は50字以内で入力してください");
      }
      if (title.trim().length === 0 || !title.length > 50) {
        isError = true;
        errorMsg.push("タイトルは50字以内で入力してください");
      }
      if (content.trim().length === 0 || !content.length > 3000) {
        isError = true;
        errorMsg.push("本文は3000字以内で入力してください");
      }
      if (!password.match(/\d\d\d\d/)) {
        isError = true;
        errorMsg.push("パスワードは半角数字4字で入力してください");
      }

      this.isError = isError;
      this.errorMsg = errorMsg;

      this.contributor = contributor;
      this.title = title;
      this.content = content;
      this.password = password;
    }
    getPostData() {
      return {
        contributor: this.contributor,
        title: this.title,
        content: this.content,
        password: this.password,
      }
    }
    getPatchData(opassword) {
      return {
        contributor: this.contributor,
        title: this.title,
        content: this.content,
        npassword: this.password,
        opassword: opassword,
      }
    }
  },
};
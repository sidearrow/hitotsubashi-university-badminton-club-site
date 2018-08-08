import { firestore } from "@/main";

export default {
  get: function () {
    firestore.collection('bbs').get().then((res) => {
      console.log(res);
      return res;
    })
  },
  set: function (data) {
    firestore.collection('bbs').add(data);
  },
  data: class{
    constructor([name, title, content, password]) {
      var isError = false;
      var errorMsg = [];
      if (name.trim().length === 0 || !name.length > 50) {
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

      this.name = name;
      this.title = title;
      this.content = content;
      this.password = password;

      const date = new Date();
      this.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }

    get() {
      return {
        name: this.name,
        date: this.date,
        title: this.title,
        content: this.content,
        password: this.password,
      }
    }
  },
};
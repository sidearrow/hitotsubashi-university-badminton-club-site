import { firestore } from "@/main";

export default {
  get: function (cb) {
    firestore
      .collection('bbs')
      .orderBy('date', 'desc')
      .limit(20)
      .get()
      .then((res) => {
      cb(res);
    });
  },
  select: function (key, cb) {
    firestore
      .collection('bbs')
      .doc(key)
      .get()
      .then((res) => {
        cb(res.data());
      })
  },
  set: function (data) {
    firestore.collection('bbs').add(data);
  },
  update: function (key, data) {
    firestore.collection('bbs').doc(key).update(data);
  },
  delete: function (key, data) {
    firestore.collection('bbs').doc(key).delete();
    firestore.collection('bbs-delete').add(data);
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
      const format = (str) => {
        return ('0' + str).substr(-2);
      }
      this.date = `${date.getFullYear()}/${format(date.getMonth() + 1)}/${format(date.getDate())} ${format(date.getHours())}:${format(date.getMinutes())}`;
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
import { firestore } from "@/main";

export default {
  selectAll: function (start) {
    if (typeof start === 'undefined') {
      return firestore
               .collection('bbs')
               .orderBy('date', 'desc')
               .limit(20)
               .get();
    } else {
      return firestore
               .collection('bbs')
               .orderBy('date', 'desc')
               .startAfter(start)
               .limit(20)
               .get();
    }
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
    firestore.collection('bbs').doc(key).delete().then(() => {
      firestore.collection('bbs-delete').add(data).then(() => {
        window.alert('削除が完了しました。');
        location.reload();
      });
    });
  },
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

    get() {
      return {
        contributor: this.contributor,
        title: this.title,
        content: this.content,
        password: this.password,
      }
    }
  },
};
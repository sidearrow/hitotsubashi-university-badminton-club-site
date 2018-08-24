import { firestore } from "@/main";

export const getPassword = function (cb) {
  firestore.collection('config').doc('password').get().then((doc) => {
    cb(doc.data());
  })
}
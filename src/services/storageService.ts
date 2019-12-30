import { firebaseStorage } from "./firebase";

export default {
  getDownloadUrl: async (filePath: string) => {
    return await firebaseStorage.ref(filePath).getDownloadURL();
  }
};

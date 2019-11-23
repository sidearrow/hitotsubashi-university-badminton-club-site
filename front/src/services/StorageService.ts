import { firebaseStorage } from '@/firebase';

export default {
  getDownloadURL: async (filePath: string) => {
    return await firebaseStorage.ref(filePath).getDownloadURL();
  }
}

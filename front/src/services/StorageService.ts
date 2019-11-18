import { firebaseStorage } from '@/firebase';

export default {
  getDownloadURL: async (fileName: string, year: string) => {
    return await firebaseStorage.ref(`ob-messages/${year}/obmessage_${fileName}.pdf`).getDownloadURL();
  }
}

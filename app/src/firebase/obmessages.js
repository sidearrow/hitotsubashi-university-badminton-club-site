import storage from './init/storage'

export default {
  getDownloadURL: function (fileName, year) {
    return storage.ref(`ob-messages/${year}/obmessage_${fileName}.pdf`).getDownloadURL()
  }
}

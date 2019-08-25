import storage from './init/storage'

export default {
  getDownloadURL: function (fileName) {
    return storage.ref('ob-messages/obmessage_' + fileName + '.pdf').getDownloadURL()
  }
}

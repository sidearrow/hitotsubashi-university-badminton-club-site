import config from '@/config'

export default {
  init: function (methods, path) {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, config.apiBaseDev + path)

    return xhr
  },
  get: function (path, cb) {
    const xhr = this.init("GET", path)
    xhr.onload = () => {
      cb(JSON.parse(xhr.response))
    }
    xhr.send()
  },
  post: function (path, params) {
    const xhr = this.init("POST", path)
    xhr.send(JSON.stringify(params))
  },
  delete: function (path) {
    const xhr = this.init("DELETE", path)
    xhr.send(null)
  }
}
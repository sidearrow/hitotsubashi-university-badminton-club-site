import config from '@/config'

export default {
  init: function (methods, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, config.apiBaseDev + url)

    return xhr
  },
  get: function (path, params, cb) {
    const xhr = this.init("GET", path)
    xhr.onload = () => {
      cb(JSON.parse(xhr.response))
    }
    xhr.send(JSON.stringify(params))
  },
  post: function (path, params) {
    const xhr = this.init("POST", path)
    //xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(params))
  }
}
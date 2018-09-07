import config from '@/config'

export default {
  init: function (methods, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, config.apiBaseDev + url)
    if (methods !== "GET") {
      xhr.setRequestHeader("Content-Type", "application/json")
    }

    return xhr
  },
  get: function (path, cb) {
    const xhr = this.init("GET", path)
    xhr.onload = () => {
      cb(JSON.parse(xhr.response))
    }
    xhr.send()
  }
}
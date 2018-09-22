import config from '@/config'

export default {
  main: function (methods, path, params, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, config.base + path)
    xhr.onload = () => {
      if (typeof cb !== 'undefined') {
        if (xhr.response === '') {
          cb()
        } else {
          try {
            const res = JSON.parse(xhr.response)
            cb(res)
          } catch (e) {
            cb({error: true})
          }
        }
      }
    }
    xhr.onerror = () => {
      if (typeof cb !== 'undefined') {
        cb()
      }
    }

    if (params === null || typeof params === "undefined") {
      xhr.send()
    } else {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(params))
    }
  },
  buildPath: function (path, params) {
    path += '?'
    for (let key in params) {
      path += key + '=' + params[key] + '&'
    }
    return path.slice(0, -1)
  },
  get: function (path, params, cb) {
    this.main("GET", this.buildPath(path, params), null, cb)
  },
  post: function (path, params, cb) {
    this.main("POST", path, params, cb)
  },
  put: function (path, params, cb) {
    this.main("PUT", path, params, cb)
  },
  delete: function (path, params) {
    this.main("DELETE", this.buildPath(path, params))
  }
}
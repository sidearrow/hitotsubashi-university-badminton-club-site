export const buildUrl = function (path, params) {
  let res = `https://hit-u-bad.herokuapp.com/api/${path}?`
  if (typeof params !== 'undefined') {
    for (let key in params) {
      res += `${key}=${params[key]}&`
    }
  }

  return res.slice(0, -1)
}
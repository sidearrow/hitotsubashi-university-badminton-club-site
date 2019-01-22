const util = {}

const convert2JST = (date) => {
  date.setTime(date.getTime() - 1000 * 60 * (-540 - date.getTimezoneOffset()))
  return date
}

util.getDateString = (date) => {
  date = convert2JST(date)
  const z = (str) => {
    return ('00' + str).substr(-2)
  }
  return date.getFullYear() + '/' +
         z((date.getMonth()+1)) + '/' +
         z(date.getDate()) + ' ' +
         z(date.getHours()) + ':' +
         z(date.getMinutes())
}

module.exports = util
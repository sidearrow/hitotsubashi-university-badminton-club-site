const util = {}

const convert2JST = (date) => {
  date.setTime(date.getTime() - 1000 * 60 * (-540 - date.getTimezoneOffset()))
  return date
}
const format = (str) => {
  return ('0' + str).substr(-2)
}

/**
 * @param {Date} date
 */
util.getDateString = (date) => {
  //date = convert2JST(date)
  return date.getFullYear() + '/' +
         format((date.getMonth()+1)) + '/' +
         format(date.getDate()) + ' ' +
         format(date.getHours()) + ':' +
         format(date.getMinutes())
}

/**
 * @param {Date} date
 */
util.getMonthString = (date) => {
  date = convert2JST(date)
  return date.getFullYear() + format((date.getMonth()+1))
}

module.exports = util
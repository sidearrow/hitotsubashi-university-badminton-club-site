/**
 * @param {Date} date 
 */
export const getDateString = (date) => {
  const format = str => ('0' + str).slice(-2)
  return date.getFullYear()
      + '/' + format(date.getMonth() + 1)
      + '/' + format(date.getDate())
      + ' ' + format(date.getHours())
      + ':' + format(date.getMinutes())
      + ':' + format(date.getSeconds())
}

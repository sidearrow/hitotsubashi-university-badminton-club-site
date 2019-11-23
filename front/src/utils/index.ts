export default {
  getDateString: (date: Date): string => {
    const format = (str: number) => ('0' + str).slice(-2);
    return date.getFullYear()
      + '/' + format(date.getMonth() + 1)
      + '/' + format(date.getDate())
      + ' ' + format(date.getHours())
      + ':' + format(date.getMinutes())
      + ':' + format(date.getSeconds())
  }
};

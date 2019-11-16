export const dateToString = (date: Date): string => {
  const format = (num: number) => ('0' + num.toString()).slice(-2);
  return date.getFullYear()
    + '/' + format(date.getMonth() + 1)
    + '/' + format(date.getDate())
    + ' ' + format(date.getHours())
    + ':' + format(date.getMinutes())
    + ':' + format(date.getSeconds());
};

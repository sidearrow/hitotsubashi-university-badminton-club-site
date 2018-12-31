const fs = require('fs')
const csvParse = require('csv-parse/lib/sync')

const settings = {
  columns: true,
  skip_empty_lines: true
}

const csvStr = fs.readFileSync(__dirname + '/member.csv')
const csvData = csvParse(csvStr, settings)

let result = { _1: [], _2: [], _3: [], _4: [] }
csvData.forEach((v) => {
  let tmp = {
    name  : v.name_family + ' ' + v.name_given,
    sx    : v.sx,
    gakubu: v.gakubu,
    from  : v.highschool + ' (' + v.prefecture + ')',
    pos   : [],
  }
  v.position.split(',').forEach((v) => {
    if (v !== '') {
      tmp.pos.push(v)
    }
  })
  result['_' + v.grade].push(tmp)
})
console.log(result)

fs.writeFileSync(__dirname + '/member.json', JSON.stringify(result))
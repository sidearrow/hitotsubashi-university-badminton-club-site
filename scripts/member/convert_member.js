const fs = require('fs')
const csvParse = require('csv-parse/lib/sync')

const settings = {
  columns: true,
  skip_empty_lines: true
}

const csvStr = fs.readFileSync(__dirname + '/member.csv')
const csvData = csvParse(csvStr, settings)

const result = [
  { grade: 4, data: [] },
  { grade: 3, data: [] },
  { grade: 2, data: [] },
  { grade: 1, data: [] },
]

csvData.forEach((v) => {
  let tmp = {
    name  : v.name_family + ' ' + v.name_given,
    sx    : v.sx,
    gakubu: v.gakubu,
    from  : v.highschool + ' (' + v.prefecture + ')',
    img   : v.img,
    pos   : [],
  }
  v.position.split(',').forEach((v) => {
    if (v !== '') {
      tmp.pos.push(v)
    }
  })
  result[4 - Number(v.grade)].data.push(tmp)
})

fs.writeFileSync(__dirname + '/member.json', JSON.stringify(result))
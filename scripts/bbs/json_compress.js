const fs = require('fs')
fs.writeFileSync(__dirname + '/bbs_data.json', JSON.stringify(JSON.parse(fs.readFileSync(__dirname + '/bbs_data_format.json'))))
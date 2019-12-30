import { parse } from 'csv/lib/sync';
import * as fs from 'fs';
import * as path from 'path';

const csvService = {
  parse: (filePath: string) => {
    return parse(
      fs.readFileSync(
        path.resolve(__dirname, '../../csv/', filePath)
      )
    );
  },
  parseToObject: (filePath: string) => {
    const data: [][] = csvService.parse(filePath);
    const header = data.shift();

    return data.map((v) => {
      const res = {};
      header.forEach((headerKey, i) => {
        res[headerKey] = v[i];
      });
      return res;
    });
  }
};

export default csvService;

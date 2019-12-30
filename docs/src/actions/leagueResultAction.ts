import { Request, Response } from "express";
import CsvLeagueResultModel from "../models/CsvLeagueResultModel";

export default (req: Request, res: Response) => {
  const csvLeagueResultModel = new CsvLeagueResultModel();
  const modelData = csvLeagueResultModel.get();

  const data = modelData
    .sort((a, b) => {
      if (a.year < b.year) return 1;
      if (a.year > b.year) return -1;
      if (a.season < b.season) return 1;
      if (a.season > b.season) return -1;
      if (a.gender > b.gender) return 1;
      if (a.gender < b.gender) return -1;
      return 0;
    })
    .reduce((pre, cur) => {
      if (pre.length === 0 || pre[pre.length - 1].data.length === 2) {
        pre.push({year: cur.year, season: cur.season, data: []});
      }
      pre[pre.length - 1].data.push(cur);
      return pre;
    }, []);

    res.json(data);
}

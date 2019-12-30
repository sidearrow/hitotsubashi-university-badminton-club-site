import { Request, Response } from "express";
import CsvLeagueResultDetailModel from "../models/CsvLeagueResultDetailModel";

export default (req: Request, res: Response) => {
  const csvLeagueResultDetailModel = new CsvLeagueResultDetailModel(req.params.leaguId);
}

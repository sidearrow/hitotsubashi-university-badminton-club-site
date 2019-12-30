import { Request, Response } from "express";
import CsvLeagueResultModel from "../models/CsvLeagueResultModel";

export default (req: Request, res: Response) => {
  const csvLeagueResultModel =  new CsvLeagueResultModel();
  console.log(csvLeagueResultModel.get());
}

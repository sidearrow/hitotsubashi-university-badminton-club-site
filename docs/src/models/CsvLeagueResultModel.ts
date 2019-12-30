import AbstractCsvModel from "./AbstractCsvModel";

type CsvLeagueResult = {
  league_id: string,
  title: string,
  gender: string,
  year: string,
  season: string,
  group: string,
  rank: string,
  up_flg: string,
  down_flg: string,
  remarks: string,
};

export default class CsvLeagueResultModel extends AbstractCsvModel {
  public constructor() {
    super();
    this.setFileName('league/league_result.csv');
  }

  public get() {
    return <CsvLeagueResult[]>super.get();
  }
};

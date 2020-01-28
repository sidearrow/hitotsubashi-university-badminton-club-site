import AbstractCsvModel from "./AbstractCsvModel";

export type CsvLeagueResultDetail = {
  no1: string;
  no2: string;
  name11: string;
  name12: string;
  mc1: string;
  s01: string;
  s11: string;
  s12: string;
  s21: string;
  s22: string;
  s31: string;
  s32: string;
  s02: string;
  name21: string;
  name22: string;
  mc2: string;
  remarks: string;
};

export default class CsvLeagueResultDetailModel extends AbstractCsvModel {
  public constructor(leagueId: string) {
    super();

    this.setFileName(`league/league_result_${leagueId}_detail.csv`);
  }

  public get() {
    return <CsvLeagueResultDetail[]>super.get();
  }
}

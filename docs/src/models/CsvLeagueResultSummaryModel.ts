import AbstractCsvModel from "./AbstractCsvModel";

export type CsvLeagueResultSummary = {
  no: string;
  name: string;
  name_short: string;
  rank: string;
  w: string;
  l: string;
  wl1: string;
  w1: string;
  l1: string;
  remarks1: string;
  wl2: string;
  w2: string;
  l2: string;
  remarks2: string;
  wl3: string;
  w3: string;
  l3: string;
  remarks3: string;
  wl4: string;
  w4: string;
  l4: string;
  remarks4: string;
  wl5: string;
  w5: string;
  l5: string;
  remarks5: string;
  wl6: string;
  w6: string;
  l6: string;
  remarks6: string;
};

export default class CsvLeagueResultSummaryModel extends AbstractCsvModel {
  public constructor(leagueId: string) {
    super();

    this.setFileName(`league/league_result_${leagueId}_summary.csv`);
  }

  public get() {
    return <CsvLeagueResultSummary[]>super.get();
  }
}

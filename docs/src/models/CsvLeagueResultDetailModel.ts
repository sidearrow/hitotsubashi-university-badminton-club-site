import AbstractCsvModel from "./AbstractCsvModel";

type CsvLeagueResultDetail = {
  callage_name: string,
  callage_name_short: string,
  rank: string,
  w: string,
  l: string,
  wl1: string,
  w1: string,
  l1: string,
  wl2: string,
  w2: string,
  l2: string,
  wl3: string,
  w3: string,
  l3: string,
  wl4: string,
  w4: string,
  l4: string,
  wl5: string,
  w5: string,
  l5: string,
  wl6: string,
  w6: string,
  l6: string,
  remarks: string,
};

export default class CsvLeagueResultDetailModel extends AbstractCsvModel {
  public constructor(leagueId: string) {
    super();
    this.setFileName(`league/${leagueId}/${leagueId}_league_result_detail.csv`);
  }

  public get() {
    return <CsvLeagueResultDetail[]> super.get();
  }
}

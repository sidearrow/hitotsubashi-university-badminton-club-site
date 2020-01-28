import { Request, Response } from "express";
import CsvLeagueResultSummaryModel, { CsvLeagueResultSummary } from "../models/CsvLeagueResultSummaryModel";
import CsvLeagueResultDetailModel, { CsvLeagueResultDetail } from "../models/CsvLeagueResultDetailModel";

export default (req: Request, res: Response) => {
  const csvLeagueResultDetailModel = new CsvLeagueResultDetailModel(req.params.leagueId);
  const csvLeagueResultSummaryModel = new CsvLeagueResultSummaryModel(req.params.leagueId);

  const leagueResultMarkdown = new LeagueResultMarkdown(
    req.params.leagueId,
    csvLeagueResultSummaryModel.get(),
    csvLeagueResultDetailModel.get()
    );

  res.send('<pre>' + leagueResultMarkdown.get() + '</pre>');
}

class LeagueResultMarkdown {
  private leagueId: string;
  private summary: CsvLeagueResultSummary[];
  private detail: CsvLeagueResultDetail[];

  private markdown: string = '';

  public constructor(
    leagueId: string,
    summary: CsvLeagueResultSummary[],
    detail: CsvLeagueResultDetail[]
  ) {
    this.leagueId = leagueId;
    this.summary = summary;
    this.detail = detail;

    this.create();
  }

  public get(): string {
    return this.markdown;
  }

  private create(): void {
    this.setH1();
    this.setSummaryTable();
  }

  private setH1(): void {
    const year = this.leagueId.substr(0, 4);
    const season = this.leagueId.substr(4, 1) === '1' ? '春' : '夏';
    const gender = this.leagueId.substr(5, 1) === '1' ? '女子' : '男子';

    this.markdown += `リーグ戦結果<br>${year} 年度 ${season}期 ${gender}`;
  }

  private setSummaryTable(): void {
    this.markdown += '<div class="table-scroll">\n';

    this.markdown += '| | ' + this.summary.map(v => v.name_short).join(' | ') + ' |\n';

    this.markdown += '|:--|:-:|:-:|:-:|:-:|:-:|:-:|:-:|\n';

    this.markdown += this.summary.map(v => {
      return '| ' + [
        v.name,
        v.remarks1 !== '' ? v.remarks1 : v.w1 === '' ? '-' : `${v.w1} ${v.wl1 === '1' ? '○' : '×'} ${v.l1}`,
        v.remarks2 !== '' ? v.remarks2 : v.w2 === '' ? '-' : `${v.w2} ${v.wl2 === '1' ? '○' : '×'} ${v.l2}`,
        v.remarks3 !== '' ? v.remarks3 : v.w3 === '' ? '-' : `${v.w3} ${v.wl3 === '1' ? '○' : '×'} ${v.l3}`,
        v.remarks4 !== '' ? v.remarks4 : v.w4 === '' ? '-' : `${v.w4} ${v.wl4 === '1' ? '○' : '×'} ${v.l4}`,
        v.remarks5 !== '' ? v.remarks5 : v.w5 === '' ? '-' : `${v.w5} ${v.wl5 === '1' ? '○' : '×'} ${v.l5}`,
        v.remarks6 !== '' ? v.remarks6 : v.w6 === '' ? '-' : `${v.w6} ${v.wl6 === '1' ? '○' : '×'} ${v.l6}`,
        v.rank
      ].join(' | ') + ' |';
    }).join('\n') + '\n';

    this.markdown += '</div>';
  }

  private setRankTable(): void {
    this.markdown += '| 順位 | 大学 | 勝敗数 |\n';
    this.markdown += '|---|---|---|\n';
  }
}

import LeagueResultJson from './leagueResult.json';

type LeagueResultJsonRecord = typeof LeagueResultJson[0];

class LeagueResult {
  private year: number;
  private season: null | 1 | 2;
  private mGroup: number;
  private mRank: number;
  private isMUp: boolean;
  private isMDown: boolean;
  private mRemarks: string;
  private mDetailId: number;
  private fGroup: number;
  private fRank: number;
  private isFUp: boolean;
  private isFDown: boolean;
  private fRemarks: string;
  private fDetailId: number;

  private constructor(record: LeagueResultJsonRecord) {
    const getSeason = (value: string) => {
      if (value === '1') return 1;
      if (value === '2') return 2;
      return null;
    }

    this.year = parseInt(record.year);
    this.season = getSeason(record.season);
    this.mGroup = parseInt(record.m_group);
    this.mRank = parseInt(record.m_rank);
    this.isMUp = record.m_up_flg === '1';
    this.isMDown = record.m_down_flag === '1';
    this.mRemarks = record.m_remarks;
    this.mDetailId = parseInt(record.m_detail_id);
    this.fGroup = parseInt(record.f_group);
    this.fRank = parseInt(record.f_rank);
    this.isFUp = record.f_up_flg === '1';
    this.isFDown = record.f_down_flag === '1';
    this.fRemarks = record.f_remarks;
    this.fDetailId = parseInt(record.f_detail_id);
  }

  public static getData(): LeagueResult[] {
    return LeagueResultJson.map((leagueResultRecord) => {
      return new this(leagueResultRecord);
    })
  }

  public getYear(): number {
    return this.year;
  }

  public getSeason(): string {
    if (this.season === 1) {
      return '春';
    }
    if (this.season === 2) {
      return '秋';
    }
    return '';
  }

  public getMResult(): string {
    if (this.year === 2011 && this.season === 1) {
      return '中止';
    }
    return this.mGroup + ' 部 ' + this.mRank + ' 位';
  }

  public getIsMUp(): boolean {
    return this.isMUp;
  }

  public getIsMDown(): boolean {
    return this.isMDown;
  }

  public getFResult(): string {
    if (this.year === 2011 && this.season === 1) {
      return '中止';
    }
    return this.fGroup + ' 部 ' + this.fRank + ' 位';
  }

  public getIsFUp(): boolean {
    return this.isFUp;
  }

  public getIsFDown(): boolean {
    return this.isFDown;
  }
}

export default LeagueResult;

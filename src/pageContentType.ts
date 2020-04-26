export interface PageContentAbout {
  positions: Position[];
  practiceTimeList: PracticeTimeList[];
}

export interface Position {
  pos: string;
  name: string;
}

export interface PracticeTimeList {
  headline: string;
  tsujyo: string;
  kyugyo: string;
}

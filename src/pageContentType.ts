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

export type PageContentMember = {
  fileUrl: string;
  fullName: string;
  grade: number;
  gender: number;
  faculty: string;
  highschool: string;
  positions: string[];
  comment: string;
}[];

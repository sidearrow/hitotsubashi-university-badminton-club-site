type Grade = 1 | 2 | 3 | 4;

export type Member = {
  familyName: string;
  firstName: string;
  gender: 'm' | 'f';
  grade: Grade;
  admissionYear: number;
  faculty: string;
  highschool: string;
  positions: string[];
};

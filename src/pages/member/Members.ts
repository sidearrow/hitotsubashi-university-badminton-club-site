import JsonMembers from './members.json';

type JsonMembers = {
  members: JsonMembersGrade[];
};
type JsonMembersGrade = {
  grade: number;
  members: JsonMember[];
};
type JsonMember = {
  fileUrl: string;
  name: string;
  gender: number;
  faculty: string;
  highschool: string;
  positions: string[];
  comment: string;
};

class Members {
  public readonly members: MembersGrade[];

  private constructor(jsonMembers: JsonMembers) {
    this.members = jsonMembers.members.map((jsonMemberGrade) => {
      return new MembersGrade(jsonMemberGrade);
    });
  }

  public static get(): Members {
    return new this(JsonMembers);
  }
}

class MembersGrade {
  public readonly grade: number;
  public readonly members: Member[];

  public constructor(jsonMembersGrade: JsonMembersGrade) {
    this.grade = jsonMembersGrade.grade;
    this.members = jsonMembersGrade.members.map((jsonMember) => {
      return new Member(jsonMember);
    });
  }
}

class Member {
  public readonly fileUrl: string;
  public readonly name: string;
  public readonly gender: number;
  public readonly faculty: string;
  public readonly highschool: string;
  public readonly positions: string[];
  public readonly comment: string;

  public readonly isMale: boolean;
  public readonly isFemale: boolean;

  public constructor(jsonMember: JsonMember) {
    this.fileUrl = jsonMember.fileUrl;
    this.name = jsonMember.name;
    this.gender = jsonMember.gender;
    this.faculty = jsonMember.faculty;
    this.highschool = jsonMember.highschool;
    this.positions = jsonMember.positions;
    this.comment = jsonMember.comment;

    this.isMale = this.gender === 0;
    this.isFemale = this.gender === 1;
  }
}

export default Members.get();

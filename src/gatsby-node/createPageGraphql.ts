import { string, number } from "prop-types";

export interface PageQueryResponse {
  frontmatter: {
    path: string;
    template: string;
  }
};

const aboutPageQuery = `
  {
    markdownRemark(frontmatter: {template: {eq: "AboutPageTemplate"}}) {
      frontmatter {
        template
        path
        title
        description
        positions {
          positionKey
          positionValue
        }
        practiceTime {
          mon
          tue
          wed
          thu
          fri
          sat
          san
          remarks
        }
      }
    }
  }
`

export type AboutPageQueryResponse = {
  frontmatter: {
    template: string;
    path: string;
    title: string;
    description: string;
    positions: {
      positionKey: string;
      positionValue: string;
    }[];
    practiceTime: {
      mon: string;
      tue: string;
      wed: string;
      thu: string;
      fri: string;
      sat: string;
      san: string;
      remarks: string;
    }[];
  }
}

const memberPageQuery = `
  {
    markdownRemark(frontmatter: {template: {eq: "MemberPageTemplate"}}) {
      frontmatter {
        template
        path
        title
        description
        members {
          comment
          faculty
          fullName
          gender
          grade
          highschool
          positions
        }
      }
    }
  }
`

export type MemberPageQueryResponse = {
  frontmatter: {
    template: string;
    path: string;
    title: string;
    description: string;
    members: {
      comment: string;
      faculty: string;
      fullName: string;
      gender: number;
      grade: number;
      highschool: string;
      positions: string[];
    }[];
  }
};

export const queryList = [
  aboutPageQuery,
  memberPageQuery,
];

import React from 'react';
import { MemberPageQueryResponse } from "../gatsby-node/createPageGraphql";
import Layout from '../components/Layout';

export const MemberPageTemplate: React.FC<{
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
}> = ({ title, description, members }) => {
  const membersGroupByGrade: { [key: number]: Object[] } = {
    4: [], 3: [], 2: [], 1: [],
  };
  members.forEach(member => membersGroupByGrade[member.grade].push(member));

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {[4, 3, 2, 1].map(k => (
        <>
          <h2>{k} 年生</h2>
          <section>{membersGroupByGrade[k].map(member => (
            <div>a</div>
          ))}</section>
        </>
      ))}
    </>
  );
};

const MemberPageTemplateWrapper: React.FC<{
  pageContext: { markdownData: MemberPageQueryResponse }
}> = ({ pageContext: { markdownData } }) => (
  <Layout>
    <MemberPageTemplate
      title={markdownData.frontmatter.title}
      description={markdownData.frontmatter.description}
      members={markdownData.frontmatter.members}
    />
  </Layout>
);

export default MemberPageTemplateWrapper;

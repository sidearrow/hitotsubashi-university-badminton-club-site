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
  const membersGroupByGrade: { [key: number]: (typeof members) } = {
    4: [], 3: [], 2: [], 1: [],
  };
  members.forEach(member => membersGroupByGrade[member.grade].push(member));

  const Badge: React.FC<{ val: string }> = ({ val }) => {
    return val === '' ? (<></>) : (
      <small className="border border-dark rounded d-inline-block p-1 mr-1">{val}</small>
    )
  };

  return (
    <Layout title={title} description={description}>
      <h1>{title}</h1>
      <p>{description}</p>
      {[4, 3, 2, 1].map(k => (
        <>
          <h2>{k} 年生</h2>
          <section>{membersGroupByGrade[k].map(member => (
            <div>
              <h5 className={member.gender === 0 ? 'text-info' : 'text-danger'}>{member.fullName}</h5>
              <div>{[member.faculty, member.highschool].concat(member.positions).map(v => <Badge val={v} />)}</div>
              <p className="mt-2">{member.comment}</p>
            </div>
          ))}</section>
        </>
      ))}
    </Layout>
  );
};

const MemberPageTemplateWrapper: React.FC<{
  pageContext: { markdownData: MemberPageQueryResponse }
}> = ({ pageContext: { markdownData } }) => (
  <MemberPageTemplate
    title={markdownData.frontmatter.title}
    description={markdownData.frontmatter.description}
    members={markdownData.frontmatter.members}
  />
);

export default MemberPageTemplateWrapper;

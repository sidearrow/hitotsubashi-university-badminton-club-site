import React from 'react';
import { PageContentMember } from '../pageContentType';

export const MemberPageTemplate: React.FC<{
  title: string;
  description: string;
  pageContent: PageContentMember
}> = ({ title, description, pageContent }) => {
  const members = pageContent;

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
    <>
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
    </>
  );
};

export default MemberPageTemplate;

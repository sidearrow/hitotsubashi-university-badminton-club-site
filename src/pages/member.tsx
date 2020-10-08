import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import { Layout } from '../components/Layout';
import { microCmsUtil } from '../lib/microCmsUtil';
import { ContentDebuger } from '../components/ContentDebuger';

type Content = {
  title: string;
  description: string;
  members: {
    grade: number;
    gradeDisplayName: string;
    members: {
      lastName: string;
      firstName: string;
      gender: 'm' | 'w';
      admissionYear: number;
      faculty: string;
      highschool: string;
      position: string[];
      positionOld: string[];
    }[];
  }[];
};

const MemberLable: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="grid grid-cols-3 mt-1">
      <div className="bg-gray-400 col-span-1 py-1 px-2">{label}</div>
      <div className="col-span-2 py-1 px-2">{value}</div>
    </div>
  );
};

const MemberCard: React.FC<Content['members'][number]['members'][number]> = ({
  firstName,
  lastName,
  gender,
  faculty,
  highschool,
  position,
  positionOld,
}) => {
  const nameColorClass = gender === 'm' ? 'text-blue-700' : 'text-red-700';
  const positionStr = position
    .concat(positionOld.map((v) => '元 ' + v))
    .join('、');

  return (
    <>
      <div className="border-b border-gray-400 pb-1 mb-2">
        <span className={`text-lg ${nameColorClass}`}>
          {lastName} {firstName}
        </span>
      </div>
      <MemberLable label="学部" value={faculty} />
      <MemberLable label="出身高校" value={highschool} />
      <MemberLable label="役職" value={positionStr} />
    </>
  );
};

const MainComponent: React.FC<{ content: Content }> = ({ content }) => {
  const title = content.title;
  const description = content.description;
  const members = content.members;

  return (
    <Layout title={title} description={description}>
      <h1 className="h1">{title}</h1>
      <div>{description}</div>
      {members.map((v, i) => (
        <React.Fragment key={i}>
          <h2 className="h2">{v.gradeDisplayName}</h2>
          <section>
            {v.members.map((m, j) => (
              <div className="mb-4" key={j}>
                <MemberCard {...m} />
              </div>
            ))}
          </section>
        </React.Fragment>
      ))}
    </Layout>
  );
};

const PageComponent: React.FC<{ content: Content }> = ({ content }) => {
  const [_content, setContent] = useState(content);
  return (
    <ContentDebuger content={_content} setContent={setContent}>
      <MainComponent content={_content} />
    </ContentDebuger>
  );
};

export const getStaticProps: GetStaticProps<{
  content: Content;
}> = async () => {
  const res = await microCmsUtil.get('/member');
  const content = JSON.parse(res.content);
  return { props: { content: content } };
};

export default PageComponent;

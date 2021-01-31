import React from 'react';
import { GetStaticProps } from 'next';

import { Layout } from '../components/Layout';
import content from '../../content/member.json';
import { Table, Td, Th } from '../components/Table';

type Content = {
  title: string;
  description: string;
  members: {
    grade: number;
    gradeDisplayName: string;
    members: {
      lastName: string;
      firstName: string;
      gender: string;
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
      <div className="bg-gray-200 col-span-1 py-1 px-2">{label}</div>
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
  const nameColorClass = gender === 'm' ? 'border-blue-500' : 'border-red-700';
  const positionStr = position
    .concat(positionOld.map((v) => '元 ' + v))
    .join('、');

  return (
    <>
      <div className={`border-l-4 ${nameColorClass} pl-2`}>
        {lastName} {firstName}
      </div>
      <MemberLable label="学部" value={faculty} />
      <MemberLable label="出身高校" value={highschool} />
      <MemberLable label="役職" value={positionStr} />
    </>
  );
};

const createPositionString = (pos: string[], posOld: string[]) =>
  pos.concat(posOld.map((v) => '元 ' + v)).join('、');

const MainComponent: React.FC<{ content: Content }> = ({ content }) => {
  const title = content.title;
  const description = content.description;
  const members = content.members;

  return (
    <Layout title={title} description={description}>
      <Table>
        <thead>
          <Th>名前</Th>
          <Th>学部</Th>
          <Th>出身</Th>
          <Th>役職</Th>
        </thead>
        {members.map((v, i) => (
          <React.Fragment key={i}>
            <tr>
              <Td colSpan={4}>{v.gradeDisplayName}</Td>
            </tr>
            {v.members.map((m, j) => (
              <tr key={j}>
                <Td>
                  <span
                    className={`pl-2 border-l-4 ${
                      m.gender === 'm' ? 'border-blue-500' : 'border-red-500'
                    }`}
                  >
                    {m.lastName} {m.firstName}
                  </span>
                </Td>
                <Td>{m.faculty}</Td>
                <Td>{m.highschool}</Td>
                <Td>{createPositionString(m.position, m.positionOld)}</Td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </Table>
    </Layout>
  );
};

const PageComponent: React.FC<{ content: Content }> = ({ content }) => {
  return <MainComponent content={content} />;
};

export const getStaticProps: GetStaticProps<{
  content: Content;
}> = async () => {
  return { props: { content: content } };
};

export default PageComponent;

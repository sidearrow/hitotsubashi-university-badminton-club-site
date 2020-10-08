import React from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

import MEMBER_JSON from '../pageComponents/member/member.json';
import { MemberCard } from '../pageComponents/member/MemberCard';
import { Member } from '../pageComponents/member/member';

type Grade = 1 | 2 | 3 | 4;

type Props = {
  members: {
    grade: Grade;
    members: Member[];
    summary: {
      m: number;
      f: number;
      sum: number;
    };
  }[];
};

const SummaryLabel: React.FC<{ male: number; female: number; sum: number }> = ({
  male,
  female,
  sum,
}) => {
  return (
    <span>
      <span className="text-blue-700">
        <span>男子</span>
        <span
          className="inline-block font-mono text-right"
          style={{ width: '17px' }}
        >
          {male}
        </span>
      </span>
      <span className="text-red-700 ml-2">
        <span>女子</span>
        <span
          className="inline-block font-mono text-right"
          style={{ width: '17px' }}
        >
          {female}
        </span>
      </span>
      <span className="ml-2">
        <span>計</span>
        <span
          className="inline-block font-mono text-right"
          style={{ width: '17px' }}
        >
          {sum}
        </span>
      </span>
    </span>
  );
};

const PageComponent: React.FC<Props> = ({ members }) => {
  return (
    <Layout
      title="部員情報"
      description="2020 年 4 月現在、私達一橋大学バドミントン部は男子 13 名、女子 4 名の計 17 名で活動しています。"
      breadcrumbs={[
        { path: '/', text: 'HOME' },
        { path: null, text: '部員情報' },
      ]}
    >
      <Container>
        <div className="pt-8 pb-16">
          <div className="main-content">
            <h1 className="h1">部員情報</h1>
            {members.map((v, i) => (
              <React.Fragment key={i}>
                <h2 className="h2">{v.grade} 年生</h2>
                <section>
                  {v.members.map((m, j) => (
                    <div className="mb-4" key={j}>
                      <MemberCard {...m} />
                    </div>
                  ))}
                </section>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const YEAR = 2020;
  const members: Props['members'] = [
    { grade: 1, members: [], summary: { m: 0, f: 0, sum: 0 } },
    { grade: 2, members: [], summary: { m: 0, f: 0, sum: 0 } },
    { grade: 3, members: [], summary: { m: 0, f: 0, sum: 0 } },
    { grade: 4, members: [], summary: { m: 0, f: 0, sum: 0 } },
  ];
  for (const member of MEMBER_JSON) {
    const grade = YEAR - member.admissionYear + 1;
    if (grade >= 1 && grade <= 4) {
      members[grade - 1].members.push({ ...member, grade: grade } as Member);
      if (member.gender === 'm') {
        members[grade - 1].summary.m++;
      }
      if (member.gender === 'f') {
        members[grade - 1].summary.f++;
      }
      members[grade - 1].summary.sum++;
    }
  }

  return { props: { members: members } };
};

export default PageComponent;

export const config = { amp: true };

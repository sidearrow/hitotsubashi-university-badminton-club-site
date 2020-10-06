import React from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

import MEMBER_JSON from '../pageComponents/member/member.json';
import { MemberCard } from '../pageComponents/member/MemberCard';
import { Member } from '../pageComponents/member/member';
import { MemberFilterButtonGroup } from '../pageComponents/member/MemberFilterButtonGroup';

type Props = {
  members: Member[];
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
            <h1>部員情報</h1>
            <div className="mb-4">
              <MemberFilterButtonGroup target={1} />
            </div>
            {members.map((m, i) => (
              <div className="mb-2" key={i}>
                <MemberCard {...m} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const YEAR = 2020;
  const members: Props['members'] = [];
  for (const member of MEMBER_JSON) {
    const grade = YEAR - member.admissionYear + 1;
    if (grade >= 1 && grade <= 4) {
      members.push({ ...member, grade: grade } as Member);
    }
  }
  return { props: { members: members } };
};

export default PageComponent;

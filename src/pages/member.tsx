import React from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

import MEMBER_JSON from '../../content/member.json';

type Grade = 1 | 2 | 3 | 4;
type Member = {
  grade: Grade;
  admissionYear: number;
  faculty: string;
  famliyName: string;
  firstName: string;
  gender: 'm' | 'f';
  highschool: string;
  postitions: string[];
};

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
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>名前</th>
                    <th>学年</th>
                    <th>学部</th>
                    <th>出身高校</th>
                    <th>役職</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m, i) => (
                    <tr key={i}>
                      <td>
                        {m.famliyName} {m.firstName}
                      </td>
                      <td>{m.grade}</td>
                      <td>{m.faculty}</td>
                      <td>{m.highschool}</td>
                      <td>{m.postitions.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

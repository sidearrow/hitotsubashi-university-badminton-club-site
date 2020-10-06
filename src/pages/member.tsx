import React, { InputHTMLAttributes, useState } from 'react';
import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

import MEMBER_JSON from '../pageComponents/member/member.json';
import { MemberCard } from '../pageComponents/member/MemberCard';
import { Member } from '../pageComponents/member/member';
import { MemberFilterRadios } from '../pageComponents/member/MemberFilterRadios';

type Props = {
  members: Member[];
  summary: {
    [key: string]: {
      m: number;
      f: number;
      sum: number;
    };
  };
};

type FilterGrade = 'ALL' | '1' | '2' | '3' | '4';

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

const PageComponent: React.FC<Props> = ({ members, summary }) => {
  const [targetGrade, setTargetGrade] = useState<string>('ALL');

  const filteredMembers = members.filter((m) => {
    return targetGrade === 'ALL' || String(m.grade) === targetGrade;
  });
  const changeMembersGradeFilterHandler: InputHTMLAttributes<
    HTMLInputElement
  >['onChange'] = (e) => {
    setTargetGrade(e.target.value);
  };

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
              {['ALL', 1, 2, 3, 4].map((v, i) => (
                <div key={i} className="bg-gray-200 px-2 py-1 my-1">
                  <label className="inline-flex items-center justify-between w-full">
                    <span>
                      <input
                        type="radio"
                        className="form-radio"
                        name="membersGradeFilter"
                        value={v}
                        onChange={changeMembersGradeFilterHandler}
                      />
                      <span className="ml-2">
                        <span className="">
                          {v === 'ALL' ? v : v + ' 年生'}
                        </span>
                      </span>
                    </span>
                    <span>
                      <SummaryLabel
                        male={summary[v].m}
                        female={summary[v].f}
                        sum={summary[v].sum}
                      />
                    </span>
                  </label>
                </div>
              ))}
            </div>
            {filteredMembers.map((m, i) => (
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
  const summary: Props['summary'] = (() => {
    const res: Props['summary'] = {};
    for (const v of ['1', '2', '3', '4', 'ALL']) {
      res[v] = { m: 0, f: 0, sum: 0 };
    }
    return res;
  })();
  for (const member of MEMBER_JSON) {
    const grade = YEAR - member.admissionYear + 1;
    if (grade >= 1 && grade <= 4) {
      members.push({ ...member, grade: grade } as Member);
      if (member.gender === 'm') {
        summary['ALL'].m++;
        summary[grade].m++;
      }
      if (member.gender === 'f') {
        summary['ALL'].f++;
        summary[grade].f++;
      }
      summary['ALL'].sum++;
      summary[grade].sum++;
    }
  }
  return { props: { members: members, summary: summary } };
};

export default PageComponent;

import React from 'react';
import Layout from '../components/Layout';
import { PageMetadata } from '../pageMetaData';
import BreadCrumb from '../components/BreadCrumb';

type LeagueResultSummary = {
  name: string;
  nameShort: string;
  rank: number;
  resultDetail: (null |
  {
    isWin: boolean;
    winNum: number;
    loseNum: number;
    remarks: string;
  })[]
}[];

type LeaguResultDetailGame = {
  name1: string[];
  name2: string[];
  isMc1: boolean;
  isMc2: boolean;
  winNum: number;
  loseNum: number;
  score: [number, number][];
};

type LeagueResultDetail = {
  callageName: string;
  winNum: number;
  loseNum: number;
  games: LeaguResultDetailGame[];
}[];

type LeagueResult = {
  title: string;
  summary: LeagueResultSummary;
  detail: LeagueResultDetail;
};

const SummaryTable: React.FC<{ data: LeagueResultSummary }> = ({ data }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <td>大学名</td>
          <td className="text-center">順位</td>
          {data.map(v => <td className="text-center">{v.nameShort}</td>)}
        </tr>
      </thead>
      <tbody>
        {data.map(v => (
          <tr>
            <td>{v.name}</td>
            <td className="has-text-centered">{v.rank}</td>
            {v.resultDetail.map(v => (
              <td className="has-text-centered">{v === null ? '-' : `${v.winNum} ${v.isWin ? '○' : '×'} ${v.loseNum}`}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DetailTable: React.FC<{ data: LeagueResultDetail }> = ({ data }) => (
  <>{data.map(v => (
    <>
      <h3>vs. {v.callageName}</h3>
      <div className="table-responsive">
        <table>
          <tbody>
            {v.games.map(v => (
              <tr>
                <td>{v.name1.join('\n')}</td>
                <td className="has-text-centered">{v.winNum}</td>
                <td className="has-text-centered">
                  {v.score.map(v => <div>{v.join(' - ')}</div>)}
                </td>
                <td className="has-text-centered">{v.loseNum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ))}</>
);

const Component: React.FC<{
  pageContext: {
    leagueId: Number;
  }
}> = ({ pageContext }) => {
  const data: LeagueResult = require(`../data/league/league_result_detail_${pageContext.leagueId}.json`);

  const pageMetadata: PageMetadata = {
    path: `/result/league/${pageContext.leagueId}`,
    title: data.title,
    description: '',
    breadcrumb: '' || [],
  };

  return (
    <Layout pageMetadata={pageMetadata}>
      <div className="section">
        <BreadCrumb props={[
          { text: 'HOME', path: '/' },
          { text: 'リーグ戦', path: '/league' },
          { text: data.title, path: null }
        ]} />
        <h1>{data.title}</h1>
        <h2>対戦表</h2>
        <SummaryTable data={data.summary} />
        <h2>結果詳細</h2>
        <DetailTable data={data.detail} />
      </div>
    </Layout>
  );
}

export default Component;

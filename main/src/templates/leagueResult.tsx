import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { PageMetadata } from '../pageMetaData';

type LeagueResultTeam = {
  name: string;
  name_short: string;
  game_no: string;
  rank: string;
  w: string;
  l: string;
  w1: string;
  l1: string;
  wl1: string;
  remarks1: string;
  w2: string;
  l2: string;
  wl2: string;
  remarks2: string;
  w3: string;
  l3: string;
  wl3: string;
  remarks3: string;
  w4: string;
  l4: string;
  wl4: string;
  remarks4: string;
  w5: string;
  l5: string;
  wl5: string;
  remarks5: string;
  w6: string;
  l6: string;
  wl6: string;
  remarks6: string;
};

type LeagueResultIndividual = {
  mc1: string;
  mc2: string;
  name11: string;
  name12: string;
  name21: string;
  no1: string;
  no2: string;
  name22: string;
  remarks: string;
  s01: string;
  s02: string;
  s11: string;
  s12: string;
  s21: string;
  s22: string;
  s31: string;
  s32: string;
};

type LeagueResultQueryResponse = {
  summary: {
    edges: {
      node: {
        title: string;
      }
    }[]
  }
  team: {
    edges: {
      node: LeagueResultTeam;
    }[];
  }
  individual: {
    group: {
      edges: {
        node: LeagueResultIndividual;
      }[];
    }[];
  }
}

const Component: React.FC<{
  data: LeagueResultQueryResponse
  pageContext: {
    leagueId: Number;
  }
}> = ({ data, pageContext }) => {
  console.log(pageContext)
  console.log(data)

  const getCallageName = (gameNo: string): string => {
    const node = data.team.edges.find(v => v.node.game_no === gameNo);
    return typeof node === 'undefined' ? '' : node.node.name;
  };

  const pageMetadata: PageMetadata = {
    path: `/result/league/${pageContext.leagueId}`,
    title: data.summary.edges[0].node.title,
    description: '',
    breadcrumb: '' || [],
  };

  const teamScore = (
    winNum: string,
    loseNum: string,
    isWin: boolean
  ) => {
    return winNum === '' && loseNum === '' ?
      '-' : `${winNum} ${isWin ? '○' : '×'} ${loseNum}`;
  }

  const gameScore = (num1: string, num2: string) => {
    return (
      <span>
        <span>{num1}</span>
        <span className="mx-2">-</span>
        <span>{num2}</span>
      </span>
    );
  }

  return (
    <Layout pageMetadata={pageMetadata}>
      <div className="markdown">
        <h1>{data.summary.edges[0].node.title}</h1>
        <h2>対戦表</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <td></td>
                {data.team.edges.map(v => <td>{v.node.name_short}</td>)}
                <td>順位</td>
              </tr>
            </thead>
            <tbody>
              {data.team.edges.map(v => (
                <tr>
                  <td>{v.node.name}</td>
                  <td className="text-center">{teamScore(v.node.w1, v.node.l1, v.node.wl1 === '1')}</td>
                  <td className="text-center">{teamScore(v.node.w2, v.node.l2, v.node.wl1 === '1')}</td>
                  <td className="text-center">{teamScore(v.node.w3, v.node.l3, v.node.wl1 === '1')}</td>
                  <td className="text-center">{teamScore(v.node.w4, v.node.l4, v.node.wl1 === '1')}</td>
                  <td className="text-center">{teamScore(v.node.w5, v.node.l5, v.node.wl1 === '1')}</td>
                  <td className="text-center">{teamScore(v.node.w6, v.node.l6, v.node.wl1 === '1')}</td>
                  <td className="text-right">{v.node.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2>結果詳細</h2>
        {data.individual.group.map((v, i) => (
          <>
            <h3>vs. {getCallageName(v.edges[0].node.no1)}</h3>
            <div className="table-responsive">
              <table>
                <tbody>
                  {v.edges.map(v => (
                    <tr>
                      <td>{v.node.name11}{v.node.name12 !== '' && (<><br />{v.node.name12}</>)}</td>
                      <td>{v.node.s01}</td>
                      <td>
                        <div>{gameScore(v.node.s11, v.node.s12)}</div>
                        <div>{gameScore(v.node.s21, v.node.s22)}</div>
                        <div>{v.node.s31 !== '' && v.node.s32 !== '' && gameScore(v.node.s31, v.node.s32)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
}

export default Component;

export const query = graphql`
query($leagueId: String!) {
  summary: allLeagueResultSummaryCsv(filter: {league_id: {eq: $leagueId}}) {
    edges {
      node {
        title
      }
    }
  }
  team: allLeagueResultTeamCsv(filter: {league_id: {eq: $leagueId}}) {
    edges {
      node {
        name
        name_short
        game_no
        rank
        w
        l
        w1
        l1
        wl1
        remarks1
        w2
        l2
        wl2
        remarks2
        w3
        l3
        wl3
        remarks3
        w4
        l4
        wl4
        remarks4
        w5
        l5
        wl5
        remarks5
        w6
        l6
        wl6
        remarks6
      }
    }
  }
  individual: allLeagueResultIndividualCsv(filter: {league_id: {eq: $leagueId}}) {
    group(field: no1) {
      edges {
        node {
          mc1
          mc2
          name11
          name12
          name21
          no1
          no2
          name22
          remarks
          s01
          s02
          s11
          s12
          s21
          s22
          s31
          s32
        }
      }
    }
  }
}
`;

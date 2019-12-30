import React, { version } from 'react'
import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';

type LeagueResultRecord = {
  year: string;
  season: string;
  up_flg: string;
  down_flg: string;
  gender: string;
  group: string;
  rank: string;
  remarks: string;
};

type LeagueResult = {
  year: string;
  season: string;
  data: LeagueResultRecord[];
}

type Props = {
  data: {
    allLeagueResultCsv: {
      edges: [{
        node: LeagueResultRecord
      }]
    }
  }
};

const Component: React.FC<Props> = props => {
  const badge = (up: Boolean, down: Boolean) => {
    if (!up && !down) {
      return '';
    }
    return (
      <span className={`px-2 border d-inline-block ${up && 'border-primary text-primary'} ${down && 'border-secondary text-secondary'}`}>{up && '昇格'}{down && '降格'}</span>
    )
  };

  return (
    <Layout isShowPageTitle={true} pageTitle="リーグ戦" pageSubTitle="関東学生バドミントン連盟リーグ、リーグ戦の結果です">
      <table className="table table-bordered">
        <thead className="alert-secondary">
          <th>年度</th>
          <th>男子</th>
          <th>女子</th>
        </thead>
        {/*data.map((v, i) => (
          <tr>
            <td className="text-nowrap">{`${v.year} ${v.season === '1' ? '春' : '秋'}`}</td>
            {v.data.map((vs, i) => (
              <td><span className="pr-2">{vs.remarks !== '' ? vs.remarks : `${vs.group} 部 ${vs.rank} 位`}</span>{badge(vs.up_flg === '1', vs.down_flg === '1')}</td>
            ))}
          </tr>
            ))*/}
      </table>
    </Layout>
  )
}

export default Component

/*
export const ResultLeagueQuery = graphql`
query ResultLeagueQuery {
  allLeagueResultCsv(sort: {order: DESC, fields: league_id}) {
    edges {
      node {
        year
        season
        up_flg
        down_flg
        gender
        group
        rank
        remarks
      }
    }
  }
}
`
*/

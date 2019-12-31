import React from 'react'
import Layout from '../components/layout';
import leagueResultData from '../data/league_results.json';
import SEO from '../components/seo';

const Component: React.FC = ({ pageContext }) => {
  console.log(pageContext)
  const badge = (flg: Number) => {
    if (flg === 0) {
      return '';
    }
    return (
      <span className={`px-2 border d-inline-block ${flg === 1 && 'border-primary text-primary'} ${flg === -1 && 'border-secondary text-secondary'}`}>{flg === 1 && '昇格'}{flg === -1 && '降格'}</span>
    )
  };

  return (
    <Layout isShowPageTitle={true} pageTitle="リーグ戦" pageSubTitle="関東学生バドミントン連盟リーグ、リーグ戦の結果です">
      <SEO title="リーグ戦" />
      <table className="table table-bordered">
        <thead className="alert-secondary">
          <th>年度</th>
          <th>男子</th>
          <th>女子</th>
        </thead>
        <tbody>
          {leagueResultData.map((v, i) => (
            v.season.map((vs, i) => (
              <tr key={i}>
                <td className="text-nowrap">{`${v.year} ${vs.season === '1' ? '春' : '秋'}`}</td>
                <td><span className="pr-2">{vs.m}</span>{badge(vs.mFlg)}</td>
                <td><span className="pr-2">{vs.f}</span>{badge(vs.fFlg)}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Component

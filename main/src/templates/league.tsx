import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

type Props = {
  pageContext: {
    data: {
      year: string;
      season: string;
      data: {
        league_id: string,
        title: string,
        gender: string,
        year: string,
        season: string,
        group: string,
        rank: string,
        up_flg: string,
        down_flg: string,
        remarks: string,
      }[]
    }[]
  }
};

const Component: React.FC<Props> = ({ pageContext }) => {
  const badge = (upFlg: boolean, downFlg: boolean) => {
    if (!upFlg && !downFlg) {
      return '';
    }
    return (
      <span className={`px-2 border d-inline-block ${upFlg && 'border-primary text-primary'} ${downFlg && 'border-secondary text-secondary'}`}>{upFlg && '昇格'}{downFlg && '降格'}</span>
    )
  };

  const getResultString = (
    group: string,
    rank: string,
    reamrks: string
  ) => reamrks === '' ? `${group} 部 ${rank} 位` : reamrks;

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
          {pageContext.data.map((v, i) => (
            <tr key={i}>
              <td className="text-nowrap">{`${v.year} ${v.season === '1' ? '春' : '秋'}`}</td>
              <td><span className="pr-2">{getResultString(v.data[0].group, v.data[0].rank, v.data[0].remarks)}</span>{badge(v.data[0].up_flg === '1', v.data[0].down_flg === '1')}</td>
              <td><span className="pr-2">{getResultString(v.data[1].group, v.data[1].rank, v.data[1].remarks)}</span>{badge(v.data[1].up_flg === '1', v.data[1].down_flg === '1')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Component

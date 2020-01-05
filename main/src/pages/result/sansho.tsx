import React from 'react'
import Layout from '../../components/layout';
import config from '../../config/configIndex';

import data from './resultSansho.json';

const typeValue = {
  m: '男子',
  mj: '男子Jr',
  f: '女子',
};

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={config.pageMetadata.resultSansho}>
      <section>
        <table className="table table-bordered">
          <thead>
            <tr className="alert-secondary">
              <th className="text-center text-nowrap">年度</th>
              <th className="text-center text-nowrap">vs. 神戸大学</th>
              <th className="text-center text-nowrap">vs. 大阪市立大学</th>
            </tr>
          </thead>
          <tbody>
            {data.map(vYear => (
              <tr>
                <td>{vYear.year}</td>
                {['kobe', 'osaka'].map(vCol => (
                  <td>
                    {['m', 'mj', 'f'].map(vType => (
                      <div className="container">
                        <div className="row mb-1">
                          <div className="col-12 col-md-6 alert-secondary py-1">{typeValue[vType]}</div>
                          <div className="col-12 col-md-6 py-1">{`${vYear[vCol][vType][0]} 勝 ${vYear[vCol][vType][1]} 敗`}</div>
                        </div>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default Component

import React from 'react';
import Layout from '../components/Layout';
import { PageContentAbout } from '../pageContentType';

const AboutPageTemplate: React.FC<{
  title: string;
  description: string;
  pageContent: PageContentAbout;
}> = ({ title, description, pageContent }) => {
  const positions = pageContent.positions;
  const practiceTimeList = pageContent.practiceTimeList;

  return (
    <Layout title={title} description={description}>
      <div className="main-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>役職</h2>
        <section className="container">
          {positions.map(v => (
            <div className="row mb-1">
              <div className="col-md-4 col-6 py-1 alert-secondary">{v.pos}</div>
              <div className="col-md-8 col-6 py-1">{v.name}</div>
            </div>
          ))}
        </section>
        <h2>練習</h2>
        <table>
          <thead className="alert-secondary">
            <tr>
              <th></th>
              <th className="text-center">通常期</th>
              <th className="text-center">休業期</th>
            </tr>
          </thead>
          <tbody>
            {practiceTimeList.map(v => (
              <tr>
                <th className="alert-secondary text-center">{v.headline}</th>
                <td className="text-center">{v.tsujyo}</td>
                <td className="text-center">{v.kyugyo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
};

export default AboutPageTemplate;

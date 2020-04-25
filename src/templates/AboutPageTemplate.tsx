import React from 'react';
import Layout from '../components/Layout';
import { AboutPageQueryResponse } from '../gatsby-node/createPageGraphql';

export const AboutPageTemplate: React.FC<{
  title: string;
  description: string;
  positions: {
    positionKey: string;
    positionValue: string;
  }[];
  practiceTime: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    san: string;
    remarks: string;
  }[];
}> = ({ title, description, positions, practiceTime }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>役職</h2>
      <section className="container">
        {positions.map(v => (
          <div className="row mb-1">
            <div className="col-md-4 col-6 py-1 alert-secondary">{v.positionKey}</div>
            <div className="col-md-8 col-6 py-1">{v.positionValue}</div>
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
          {[['mon', '月'], ['tue', '火'], ['wed', '水'], ['thu', '木'], ['fri', '金'], ['sat', '土'], ['san', '日'], ['remarks', '備考']].map(v => (
              <tr>
                <th className="alert-secondary text-center">{v[1]}</th>
                <td className="text-center">{practiceTime[0][v[0]]}</td>
                <td className="text-center">{practiceTime[1][v[0]]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  )
};

const AboutPageTemplateWrapper: React.FC<{
  pageContext: { markdownData: AboutPageQueryResponse }
}> = ({ pageContext: { markdownData } }) => {
  console.log(markdownData)
  return (
    <AboutPageTemplate
      title={markdownData.frontmatter.title}
      description={markdownData.frontmatter.description}
      positions={markdownData.frontmatter.positions}
      practiceTime={markdownData.frontmatter.practiceTime}
    />
  );
};

export default AboutPageTemplateWrapper;

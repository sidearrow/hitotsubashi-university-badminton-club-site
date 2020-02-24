import React from 'react';
import Layout from '../components/Layout';
import './annual-schedule.css';
import data from './annual-schedule.json';
import pageMetadata from '../pageMetaData';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={pageMetadata.infoAnnualSchedule}>
      <div className="section">
        <h1>年間スケジュール</h1>
        <ul className="timeline">
          {data.map(v => (
            <li>
              <div className="text-secondary">{v.date}</div>
              <div className="text-main" style={{ fontSize: '1.5rem' }}>{v.title}</div>
              {v.description && <div>{v.description}</div>}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Component;

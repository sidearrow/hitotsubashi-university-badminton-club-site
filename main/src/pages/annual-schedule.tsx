import React from 'react';
import Layout from '../components/layout';
import './annual-schedule.css';
import data from './annual-schedule.json';
import pageMetadata from '../pageMetaData';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={pageMetadata.infoAnnualSchedule}>
      <ul className="timeline">
        {data.map(v => (
          <li>
            <div className="text-secondary">{v.date}</div>
            <div className="text-main" style={{fontSize: '1.5rem'}}>{v.title}</div>
            { v.description && <div>{v.description}</div> }
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Component;

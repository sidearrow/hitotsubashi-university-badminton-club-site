import React from 'react';
import Layout from '../../components/layout';
import './annual-schedule.css';
import data from './annual-schedule.json';

const Component: React.FC = () => {
  return (
    <Layout isShowPageTitle={true} pageTitle="年間スケジュール">
      <ul className="timeline">
        {data.map(v => (
          <li>
            <div className="text-secondary">{v.date}</div>
            <div className="text-main font-weight-bold" style={{fontSize: '1.5rem'}}>{v.title}</div>
            { v.description && <div>{v.description}</div> }
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Component;

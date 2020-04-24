import React from 'react';
import Layout from '../components/Layout';
import pageMetadata from '../pageMetaData';
import Schedule from '../components/Schedule';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={pageMetadata.infoAnnualSchedule}>
      <div className="section">
        <h1>年間スケジュール</h1>
        <Schedule />
      </div>
    </Layout>
  );
};

export default Component;

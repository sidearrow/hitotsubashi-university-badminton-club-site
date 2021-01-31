import React from 'react';
import { Layout } from '../components/Layout';

import content from '../../content/annual-schedule.json';

const Component: React.FC = () => {
  const title = content.title;
  const description = content.description;
  const scheduleYear = content.scheduleYear;

  return (
    <Layout title={title} description={description}>
      <h1 className="h1">{title}</h1>
      <section className="mt-8">
        {scheduleYear.content.map((v, i) => (
          <div key={i} className="mb-2">
            <div>
              <span className="font-bold">{v.title}</span>
              <span className="text-sm text-gray-600 ml-2">{v.time}</span>
            </div>
            <div className="ml-4">{v.description}</div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Component;

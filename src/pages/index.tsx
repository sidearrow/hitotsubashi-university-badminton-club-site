import React from 'react';
import { Layout } from '../components/Layout';

const Component: React.FC = () => (
  <Layout title="" description="一橋大学体育会バドミントン部の公式サイト">
    <div className="text-center mb-16 py-16">
      <h1>
        <span className="text-3xl text-gray-900 tracking-widest">
          一橋大学
          <br />
          バドミントン部
        </span>
      </h1>
      <div>
        <span className="text-gray-600 font-serif">
          Hitotsubashi University Badminton Club was established in 1952.
        </span>
      </div>
    </div>
  </Layout>
);

export default Component;

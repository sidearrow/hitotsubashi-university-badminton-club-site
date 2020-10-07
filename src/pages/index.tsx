import React from 'react';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';

const Component: React.FC = () => (
  <Layout title="" description="">
    <div className="text-center">
      <Container>
        <div>
          <div>
            <span className="text-3xl text-gray-900">一橋大学</span>
          </div>
          <div>
            <span className="text-3xl text-gray-900">バドミントン部</span>
          </div>
          <div>
            <span className="text-gray-600">
              Hitotsubashi University Badminton Club was established in 1952.
            </span>
          </div>
        </div>
      </Container>
    </div>
  </Layout>
);

export default Component;

export const config = { amp: true };

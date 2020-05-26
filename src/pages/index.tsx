import React from 'react';
import { Layout } from '../components/Layout';
import { TwitterEmbed } from '../components/TwitterEmbed';
import { Container } from '../components/Container';

const Component: React.FC = () => (
  <Layout title="" description="">
    <div className="text-center">
      <Container>
        <div className="text-3xl text-gray-900">一橋大学</div>
        <div className="text-3xl text-gray-900">バドミントン部</div>
        <div className="text-gray-600 mt-2">
          Hitotsubashi University Badminton Club was established in 1952.
        </div>
      </Container>
    </div>
    <section className="mt-16 mb-8">
      <Container>
        <div className="md:w-3/5 mx-auto">
          <TwitterEmbed />
        </div>
      </Container>
    </section>
  </Layout>
);

export default Component;

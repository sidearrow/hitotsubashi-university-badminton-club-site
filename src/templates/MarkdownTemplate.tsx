import React from 'react';
import Layout from '../components/Layout';

export const MarkdownTemplate: React.FC<{
  title: string;
  description: string;
  html: string;
}> = ({ title, description, html }) => (
  <Layout title={title} description={description}>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </Layout>
);

export default MarkdownTemplate;

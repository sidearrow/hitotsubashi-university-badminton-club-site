import React from 'react';
import Layout from '../components/Layout';

export const MarkdownTemplate: React.FC<{
  isPreview: boolean;
  title: string;
  description: string;
  html: string;
}> = ({ isPreview, title, description, html }) => (
  <Layout title={title} description={description}>
    {isPreview && (<div>{html}</div>)}
    {!isPreview && (<div dangerouslySetInnerHTML={{ __html: html }}></div>)}
  </Layout>
);

export default MarkdownTemplate;

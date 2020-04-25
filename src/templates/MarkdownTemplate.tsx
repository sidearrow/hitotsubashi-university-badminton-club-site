import React from 'react';
import Layout from '../components/Layout';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';

export const MarkdownTemplate: React.FC<{ html: string }> = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }}></div>
);

const MarkdownTemplateWrapper: React.FC<{ pageContext: { data: PageQueryResponse } }> = (
  { pageContext: { data: { html, frontmatter: { title, description } } } }
) => (
    <Layout title={title} description={description}>
      <MarkdownTemplate html={html} />
    </Layout>
  );

export default MarkdownTemplateWrapper;

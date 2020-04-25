import React from 'react';
import Layout from '../components/Layout';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';

export const MarkdownTemplate: React.FC<
  { title: string; description: string; html: string; isAuthRequired: boolean }
> = ({ title, description, html, isAuthRequired }) => (
  <Layout title={title} description={description} isAuthRequired={isAuthRequired}>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </Layout>
);

const MarkdownTemplateWrapper: React.FC<{ pageContext: { data: PageQueryResponse } }> = (
  { pageContext: { data: { html, frontmatter: { title, description, isAuthRequired } } } }
) => (
    <MarkdownTemplate title={title} description={description} html={html} isAuthRequired={isAuthRequired || false} />
  );

export default MarkdownTemplateWrapper;

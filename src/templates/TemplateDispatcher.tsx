import React from 'react';
import { MarkdownTemplate } from './MarkdownTemplate';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';
import Layout from '../components/Layout';
import Breadcrumb from '../components/BreadCrumb';

export const TemplateDispatcher: React.FC<{
  isPreview?: boolean;
  title: string;
  description: string;
  html: string;
  breadcrumbs: {
    text: string;
    path: string | null;
  }[];
}> = ({ isPreview, title, description, html, breadcrumbs }) => {
  return (
    <Layout title={title} description={description}>
      {breadcrumbs !== null && <Breadcrumb breadcrumb={breadcrumbs} />}
      <div className=" main-content">
        <MarkdownTemplate
          isPreview={isPreview || false}
          title={title}
          description={description}
          html={html}
        />
      </div>
    </Layout>
  );
};

const TemplateDispatcherWrapper: React.FC<{
  pageContext: { data: PageQueryResponse };
}> = ({ pageContext: { data: markdownData } }) => {
  return (
    <TemplateDispatcher
      title={markdownData.frontmatter.title}
      description={markdownData.frontmatter.description}
      html={markdownData.html}
      breadcrumbs={markdownData.frontmatter.breadcrumbs}
    />
  );
};

export default TemplateDispatcherWrapper;

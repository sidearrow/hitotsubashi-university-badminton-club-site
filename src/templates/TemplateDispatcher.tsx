import React from 'react';
import { MarkdownTemplate } from './MarkdownTemplate';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';
import Layout from '../components/Layout';
import { CmpBreadcrumb } from '../components/breadcrumb/breadcrumb.cmp';
import CmpAuthGuard from '../components/CmpAuthGuard';

export const TemplateDispatcher: React.FC<{
  isPreview?: boolean;
  title: string;
  description: string;
  html: string;
  breadcrumbs: {
    text: string;
    path: string | null;
  }[];
  isAuthRequired: boolean;
}> = ({ isPreview, title, description, html, breadcrumbs, isAuthRequired }) => {
  const main = (
    <>
      <div className="container">
        {breadcrumbs !== null && <CmpBreadcrumb breadcrumb={breadcrumbs} />}
        <MarkdownTemplate
          isPreview={isPreview || false}
          title={title}
          description={description}
          html={html}
        />
      </div>
    </>
  );

  if (!isPreview && isAuthRequired) {
    return (
      <Layout title={title} description={description}>
        <CmpAuthGuard>{main}</CmpAuthGuard>
      </Layout>
    );
  }

  return (
    <Layout title={title} description={description}>
      {main}
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
      isAuthRequired={Boolean(markdownData.frontmatter.isAuthRequired)}
    />
  );
};

export default TemplateDispatcherWrapper;

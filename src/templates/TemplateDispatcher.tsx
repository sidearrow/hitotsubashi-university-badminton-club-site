import React from 'react';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';
import Layout from '../components/Layout';
import { CmpBreadcrumb } from '../components/breadcrumb/breadcrumb.cmp';
import { AuthGuard } from '../components/AuthGuard';

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
}> = ({ isPreview, title, description, html, breadcrumbs, isAuthRequired }) => (
  <Layout title={title} description={description}>
    <div className="container">
      <AuthGuard isAuthRequired={isAuthRequired}>
        {breadcrumbs !== null && <CmpBreadcrumb breadcrumb={breadcrumbs} />}
        <div className="main-content">
          {isPreview && <>{html}</>}
          {!isPreview && <div dangerouslySetInnerHTML={{ __html: html }}></div>}
        </div>
      </AuthGuard>
    </div>
  </Layout>
);

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

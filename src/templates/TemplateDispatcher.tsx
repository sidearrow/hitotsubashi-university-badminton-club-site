import React from 'react';
import { MarkdownTemplate } from './MarkdownTemplate';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';
import Layout from '../components/Layout';
import Breadcrumb from '../components/BreadCrumb';

export const TemplateDispatcher: React.FC<{
  isPreview?: boolean;
  contentType: 'json' | 'markdown';
  title: string;
  description: string;
  templateFile: string;
  pageContent: Object
  html: string;
  breadcrumbs: {
    text: string;
    path: string | null;
  }[];
}> = ({ isPreview, contentType, title, description, templateFile, pageContent, html, breadcrumbs }) => {

  let commonTemplate;
  if (contentType === 'markdown') {
    commonTemplate = (
      <MarkdownTemplate
        isPreview={isPreview || false}
        title={title}
        description={description}
        html={html}
      />
    );
  } else {
    const Template = require(`./${templateFile}`).default;
    commonTemplate = (
      <Template
        isPreview={isPreview || false}
        title={title}
        description={description}
        pageContent={pageContent}
      />
    );
  }

  return (
    <Layout title={title} description={description}>
      {breadcrumbs !== null && (<Breadcrumb breadcrumb={breadcrumbs} />)}
      <>{commonTemplate}</>
    </Layout>
  )
};

const TemplateDispatcherWrapper: React.FC<{
  pageContext: { data: PageQueryResponse }
}> = ({ pageContext: { data: markdownData } }) => {

  let pageContent;
  try {
    pageContent = JSON.parse(markdownData.frontmatter.content);
  } catch {
    pageContent = [];
  }

  return (
    <TemplateDispatcher
      contentType={markdownData.frontmatter.contentType}
      title={markdownData.frontmatter.title}
      description={markdownData.frontmatter.description}
      templateFile={markdownData.frontmatter.template}
      pageContent={pageContent}
      html={markdownData.html}
      breadcrumbs={markdownData.frontmatter.breadcrumbs}
    />
  )
};

export default TemplateDispatcherWrapper;

import React from 'react';
import { MarkdownTemplate } from './MarkdownTemplate';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';

export const TemplateDispatcher: React.FC<{
  contentType: 'json' | 'markdown';
  title: string;
  description: string;
  templateFile: string;
  pageContent: Object
  html: string;
}> = ({ contentType, title, description, templateFile, pageContent, html }) => {

  if (contentType === 'markdown') {
    return (
      <MarkdownTemplate
        title={title}
        description={description}
        html={html}
      />
    );
  }

  const Template = require(`./${templateFile}`).default;

  return (
    <Template
      title={title}
      description={description}
      pageContent={pageContent}
    />
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
    />
  )
};

export default TemplateDispatcherWrapper;

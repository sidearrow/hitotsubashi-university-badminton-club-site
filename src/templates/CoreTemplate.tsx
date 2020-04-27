import React from 'react';
import { PageQueryResponse } from '../gatsby-node/createPageGraphql';

type TemplateComponent<T> = React.FC<{
  title: string;
  description: string;
}>;

export const TemplateDispatcher: React.FC<{
  title: string;
  description: string;
  templateFile: string;
  pageContent: Object
}> = ({ title, description, templateFile, pageContent }) => {
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
      title={markdownData.frontmatter.title}
      description={markdownData.frontmatter.description}
      templateFile={markdownData.frontmatter.template}
      pageContent={pageContent}
    />
  )
};

export default TemplateDispatcherWrapper;

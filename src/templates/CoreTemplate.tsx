import React from 'react';
import { AboutPageQueryResponse } from '../gatsby-node/createPageGraphql';

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
)};

const TemplateDispatcherWrapper: React.FC<{
  pageContext: { markdownData: AboutPageQueryResponse }
}> = ({ pageContext: { markdownData } }) => {
  const pageContent = require('../../static/files/' + markdownData.frontmatter.pageContentFile);

  return (
  <TemplateDispatcher
    title={markdownData.frontmatter.title}
    description={markdownData.frontmatter.description}
    templateFile={markdownData.frontmatter.template}
    pageContent={pageContent}
  />
)};

export default TemplateDispatcherWrapper;

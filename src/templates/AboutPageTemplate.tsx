import React from 'react';
import Layout from '../components/Layout';
import { AboutMarkdownRemark } from '../gatsby-node';

export const AboutPageTemplate: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
    </Layout>
  )
};

const AboutPageTemplateWrapper: React.FC<{
  pageContext: { markdownData: AboutMarkdownRemark }
}> = ({ pageContext: { markdownData } }) => {
  return (
    <Layout>
      <AboutPageTemplate
        title={markdownData.frontmatter.title}
        description={markdownData.frontmatter.description}
      />
    </Layout>
  );
};

export default AboutPageTemplateWrapper;

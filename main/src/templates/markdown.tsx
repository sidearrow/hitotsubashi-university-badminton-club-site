import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import config from '../config/configIndex';
import { PageMetadata } from '../config/configPageMetadata';

type Data = {
  markdownRemark: {
    path: string;
    html: string;
    frontmatter: {
      title: string;
      description: string;
      breadcrumbs: {
        path: string;
        text: string;
      }[];
    }
  }
};

export default ({ data }: { data: Data }) => {
  console.log(data)
  const pageMetadata: PageMetadata = {
    path: data.markdownRemark.path,
    title: data.markdownRemark.frontmatter.title,
    description: data.markdownRemark.frontmatter.description,
    breadcrumb: [],
  };

  return (
    <Layout pageMetadata={pageMetadata}>
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {
      path: { eq: $path }
    }) {
      html
      frontmatter {
        title
        description
        breadcrumbs {
          path
          text
        }
      }
    }
  }
`

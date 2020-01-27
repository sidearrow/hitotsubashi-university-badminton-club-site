import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { PageMetadata } from '../pageMetaData';
import SanshoTable from '../components/sanshoTable';

type Data = {
  markdownRemark: {
    path: string;
    html: string;
    frontmatter: {
      path: string;
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
  const pageMetadata: PageMetadata = {
    path: data.markdownRemark.frontmatter.path,
    title: data.markdownRemark.frontmatter.title,
    description: data.markdownRemark.frontmatter.description,
    breadcrumb: data.markdownRemark.frontmatter.breadcrumbs || [],
  };

  return (
    <Layout pageMetadata={pageMetadata}>
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        {pageMetadata.path === '/result/sansho' && <SanshoTable />}
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
        path
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
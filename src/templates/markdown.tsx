import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { PageMetadata } from '../pageMetaData';
import SanshoTable from '../components/sanshoTable';
import ObMessage from '../components/ObMessage';

type Data = {
  markdownRemark: {
    path: string;
    html: string;
    frontmatter: {
      path: string;
      title: string;
      description: string;
      isAuthRequired: boolean | null;
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
    <Layout
      pageMetadata={pageMetadata}
      isAuthRequired={data.markdownRemark.frontmatter.isAuthRequired || false}
    >
      <div className="section">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        {pageMetadata.path === '/mizutori' && (
          <>
            <h2>OB通信</h2>
            <ObMessage />
          </>
        )}
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
      }
    }
  }
`

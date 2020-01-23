import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import config from '../config/configIndex';

type Data = {
  markdownRemark: {
    html: string;
  }
};

export default ({ data }: { data: Data }) => {
  return (
    <Layout pageMetadata={config.pageMetadata.santama}>
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
    }
  }
`

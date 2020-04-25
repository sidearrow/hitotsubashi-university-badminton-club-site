import path from 'path';
import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import { PageQueryResponse, queryList, markdownPagesQuery } from './createPageGraphql';

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql }) => {
  for (const query of queryList) {
    const res: { data?: { markdownRemark: PageQueryResponse } } = await graphql(query);

    if (res.data === undefined) {
      return;
    }

    createPage({
      path: res.data.markdownRemark.frontmatter.path,
      component: path.resolve(`src/templates/${res.data.markdownRemark.frontmatter.template}.tsx`),
      context: {
        markdownData: res.data.markdownRemark
      }
    });
  }

  const res: { data?: { allMarkdownRemark: { edges: { node: PageQueryResponse }[] } } } = await graphql(markdownPagesQuery);

  if (res.data === undefined) {
    return;
  }

  res.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: path.resolve('src/templates/MarkdownTemplate.tsx'),
      context: {
        data: edge.node,
      }
    });
  });
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

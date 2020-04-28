import path from 'path';
import { GatsbyNode } from 'gatsby';
import { PageQueryResponse, markdownPagesQuery } from './createPageGraphql';

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
}) => {
  const res: {
    data?: { allMarkdownRemark: { edges: { node: PageQueryResponse }[] } };
  } = await graphql(markdownPagesQuery);

  if (res.data === undefined) {
    return;
  }

  res.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: path.resolve(`src/templates/TemplateDispatcher.tsx`),
      context: {
        data: edge.node,
      },
    });
  });
};

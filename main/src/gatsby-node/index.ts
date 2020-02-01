import path from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  type AllMarkdown = {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            path: string;
          }
        }
      }[]
    }
  };

  const allMarkdown: { data?: AllMarkdown } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (typeof allMarkdown.data === 'undefined') {
    return;
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/markdown.tsx'),
      context: {}
    });
  });

  createPage({
    path: 'result/league/201911',
    component: path.resolve('src/templates/leagueResult.tsx'),
    context: {
      leagueId: '201911',
    }
  });
}

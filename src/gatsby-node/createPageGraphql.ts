export interface PageQueryResponse {
  frontmatter: {
    path: string;
    title: string;
    description: string;
    breadcrumbs: {
      path: string | null;
      text: string;
    }[];
  };
  html: string;
}

export const markdownPagesQuery = `
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          title
          description
          breadcrumbs {
            path
            text
          }
        }
        html
      }
    }
  }
}
`;

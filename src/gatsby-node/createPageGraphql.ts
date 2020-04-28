export interface PageQueryResponse {
  frontmatter: {
    contentType: 'json' | 'markdown';
    path: string;
    template: string;
    title: string;
    description: string;
    content: string;
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
          contentType
          template
          path
          title
          description
          content
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

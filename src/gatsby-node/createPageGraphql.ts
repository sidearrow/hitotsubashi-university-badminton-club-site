export interface PageQueryResponse {
  frontmatter: {
    contentType: 'json' | 'markdown';
    path: string;
    template: string;
    title: string;
    description: string;
    content: string;
  }
  html: string;
};

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
        }
        html
      }
    }
  }
}
`;

export interface PageQueryResponse {
  frontmatter: {
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

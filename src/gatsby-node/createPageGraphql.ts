export interface PageQueryResponse {
  frontmatter: {
    path: string;
    template: string;
    title: string;
    description: string;
    pageContentFile: string;
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
          pageContentFile
        }
        html
      }
    }
  }
}
`;

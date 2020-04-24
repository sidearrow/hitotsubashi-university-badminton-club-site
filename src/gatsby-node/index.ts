import path from 'path';
import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export type AboutMarkdownRemark = {
  frontmatter: {
    template: string;
    path: string;
    title: string;
    description: string;
    positions: {
      positionKey: string;
      positionValue: string;
    }[];
    practiceTime: {
      mon: string;
      tue: string;
      wed: string;
      thu: string;
      fri: string;
      sat: string;
      san: string;
      remarks: string;
    }[];
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql }) => {
  const aboutMarkdown: { data?: { markdownRemark: AboutMarkdownRemark } } = await graphql(`
    {
      markdownRemark(frontmatter: {template: {eq: "AboutPageTemplate"}}) {
        frontmatter {
          template
          path
          title
          description
          positions {
            positionKey
            positionValue
          }
          practiceTime {
            mon
            tue
            wed
            thu
            fri
            sat
            san
            remarks
          }
        }
      }
    }
  `);

  if (typeof aboutMarkdown.data === 'undefined') {
    return;
  }

  createPage({
    path: aboutMarkdown.data.markdownRemark.frontmatter.path,
    component: path.resolve(`src/templates/${aboutMarkdown.data.markdownRemark.frontmatter.template}.tsx`),
    context: {
      markdownData: aboutMarkdown.data.markdownRemark
    }
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

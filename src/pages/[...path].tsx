import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { SantamaPageTemplate } from '../templates/SantamaPageTemplate';
import { MarkdownParseResponse, markdownUtils } from '../lib/markdownUtils';

type Props = MarkdownParseResponse & { path: string };

const TemplateDispatcher: React.FC<{ path: string; html: string }> = ({
  path,
  html,
}) => {
  if (path === 'santama') {
    return (
      <SantamaPageTemplate>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </SantamaPageTemplate>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

const Component: React.FC<Props> = ({
  title,
  description,
  html,
  breadcrumbs,
  path,
}) => {
  return (
    <Layout title={title} description={description} breadcrumbs={breadcrumbs}>
      <Container>
        <div className="pt-8 pb-16">
          <div className="main-content">
            <TemplateDispatcher html={html} path={path} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = markdownUtils
    .getPaths()
    .map((path) => ({ params: { path: path.replace('.md', '').split('/') } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  if (ctx.params === undefined || !(ctx.params.path instanceof Array)) {
    throw new Error();
  }
  const path = ctx.params.path.join('/');
  const res = markdownUtils.parseMarkdown(`${path}.md`);

  return {
    props: { ...res, ...{ path: path } },
  };
};

export const config = { amp: true };

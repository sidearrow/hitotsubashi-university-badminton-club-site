import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { parseMarkdown, MarkdownParseResponse } from '../markdownParser';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { config } from '../config';
import { AuthGuard } from '../components/AuthGuard';

const PATHS = [
  'about',
  'member',
  'schedule',
  'santama',
  'mizutori',
  'result/index',
  'result/league',
  'result/tosho',
  'result/sansho',
];

type Props = MarkdownParseResponse & { isAuth: boolean };

const Component: React.FC<Props> = ({
  title,
  description,
  html,
  breadcrumbs,
  isAuth,
}) => {
  console.log(isAuth);

  return (
    <Layout title={title} description={description} breadcrumbs={breadcrumbs}>
      <Container>
        <div className="pt-8 pb-16">
          <AuthGuard isAuthRequired={isAuth}>
            <div
              className="main-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </AuthGuard>
        </div>
      </Container>
    </Layout>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: PATHS.map((v) => ({ params: { path: v.split('/') } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  if (ctx.params === undefined || !(ctx.params.path instanceof Array)) {
    throw new Error();
  }
  const path = ctx.params.path.join('/');
  const res = parseMarkdown(`${path}.md`);

  return {
    props: { ...res, ...{ isAuth: path === 'mizutori' } },
  };
};

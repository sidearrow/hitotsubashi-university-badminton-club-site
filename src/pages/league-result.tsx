import { GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../components/Layout';

import content from '../../content/league-result.json';
import { Table, Td, Th } from '../components/Table';

type Content = {
  title: string;
  description: string;
  content: {
    season: string;
    m: string;
    w: string;
  }[];
};

const Component: React.FC<{ content: Content }> = ({ content }) => {
  const title = content.title;
  const description = content.description;
  const leagueResultContent = content.content;

  return (
    <Layout title={title} description={description}>
      <h1 className="h1">{title}</h1>
      <section>
        <Table>
          <thead>
            <tr>
              <Th>年度</Th>
              <Th>男子</Th>
              <Th>女子</Th>
            </tr>
          </thead>
          <tbody>
            {leagueResultContent.map((v, i) => (
              <tr key={i}>
                <Td>{v.season}</Td>
                <Td>{v.m}</Td>
                <Td>{v.w}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  content: Content;
}> = async () => {
  return { props: { content: content } };
};

export default Component;

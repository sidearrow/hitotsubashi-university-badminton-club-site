import React from 'react';

import { Layout } from '../components/Layout';
import { pages } from '../pages';

import pageContent from '../../content/practice-schedule.json';
import { Table, Td, Th } from '../components/Table';
import { ExternalLink } from '../components/ExternalLink';
import { CONFIG } from '../config';

const content = pageContent.content;

const Component: React.FC = () => {
  return (
    <Layout title={pages.practiceSchedule.name} description="">
      <h1 className="h1">練習スケジュール</h1>
      <section className="mt-8">
        <h2 className="h2">活動場所</h2>
        <ExternalLink href={CONFIG.url.map}>
          一橋大学 小平国際キャンパス内 体育館
        </ExternalLink>
      </section>
      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <Th>曜日</Th>
              <Th>通常期</Th>
              <Th>休業期</Th>
            </tr>
          </thead>
          <tbody>
            {content.map((v, i) => (
              <tr key={i}>
                <Td>{v.day}</Td>
                <Td>{v.normal}</Td>
                <Td>{v.holiday}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default Component;

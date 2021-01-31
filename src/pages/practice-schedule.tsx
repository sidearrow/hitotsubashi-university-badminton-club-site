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
    </Layout>
  );
};

export default Component;

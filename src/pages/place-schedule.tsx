import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { ContentDebuger } from '../components/ContentDebuger';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';
import { CONFIG } from '../config';
import { microCmsUtil } from '../lib/microCmsUtil';

type ScheduleWeekContent = {
  day: string;
  normal: string;
  holiday: string;
}[];

type ScheduleYearContent = {
  time: string;
  title: string;
  description: string;
}[];

type Content = {
  title: string;
  description: string;
  scheduleWeek: {
    title: string;
    content: ScheduleWeekContent;
  };
  scheduleYear: {
    title: string;
    content: ScheduleYearContent;
  };
};

const Th: React.FC = ({ children }) => (
  <th className="font-bold text-center bg-gray-200 py-2 px-4">{children}</th>
);

const Td: React.FC = ({ children }) => (
  <td className="text-center py-2 px-4">{children}</td>
);

export const PracticeTime: React.FC<{ content: ScheduleWeekContent }> = ({
  content,
}) => {
  return (
    <div className="table-scroll">
      <table
        style={{
          width: '100%',
        }}
      >
        <thead>
          <tr className="border-b">
            <Th>曜日</Th>
            <Th>通常</Th>
            <Th>休業</Th>
          </tr>
        </thead>
        <tbody>
          {content.map((v, i) => (
            <tr key={i} className="border-b border-dotted">
              <Td>{v.day}</Td>
              <Td>{v.normal}</Td>
              <Td>{v.holiday}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ScheduleYear: React.FC<{ content: ScheduleYearContent }> = ({
  content,
}) => {
  return (
    <ul className="timeline">
      {content.map((v, i) => (
        <li key={i}>
          <div className="border-b border-gray-400 mb-2">{v.time}</div>
          <div className="font-bold">{v.title}</div>
          <div className="text-gray-600 ml-4">{v.description}</div>
        </li>
      ))}
    </ul>
  );
};

const MainComponent: React.FC<{ content: Content }> = ({ content }) => {
  const title = content.title;
  const description = content.description;
  const scheduleWeek = content.scheduleWeek;
  const scheduleYear = content.scheduleYear;
  return (
    <Layout title={title} description={description}>
      <h1 className="h1">{title}</h1>
      <section className="mt-8">
        <h2 className="h2">活動場所</h2>
        一橋大学 小平国際キャンパス内 体育館
        <br />
        <ExternalLink href={CONFIG.url.map}>Google Map</ExternalLink>
      </section>
      <section className="mt-8">
        <h2 className="h2">{scheduleWeek.title}</h2>
        <PracticeTime content={scheduleWeek.content} />
      </section>
      <section className="mt-8">
        <h2 className="h2">{scheduleYear.title}</h2>
        <ScheduleYear content={scheduleYear.content} />
      </section>
    </Layout>
  );
};

const Component: React.FC<{ content: Content }> = ({ content }) => {
  const [_content, setContent] = useState(content);
  return (
    <ContentDebuger content={_content} setContent={setContent}>
      <MainComponent content={_content} />
    </ContentDebuger>
  );
};

export const getStaticProps: GetStaticProps<{
  content: Content;
}> = async () => {
  const res = await microCmsUtil.get('/place-schedule');
  const content = JSON.parse(res.content);
  return { props: { content: content } };
};

export default Component;

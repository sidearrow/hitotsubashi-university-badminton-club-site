import React from 'react';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';
import { CONFIG } from '../config';
import content from '../../content/place-schedule.json';

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
    <div>
      {content.map((v, i) => (
        <div key={i} className="mb-4">
          <h3>
            <span className="h3">{v.title}</span>
            <span className="ml-4">{v.time}</span>
          </h3>
          <div className="">{v.description}</div>
        </div>
      ))}
    </div>
  );
};

const Component: React.FC = () => {
  const title = content.title;
  const description = content.description;
  const scheduleWeek = content.scheduleWeek;
  const scheduleYear = content.scheduleYear;
  return (
    <Layout title={title} description={description}>
      <h1 className="h1">{title}</h1>
      <section className="mt-8">
        <h2 className="h2">活動場所</h2>
        <ExternalLink href={CONFIG.url.map}>
          一橋大学 小平国際キャンパス内 体育館
        </ExternalLink>
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

export default Component;

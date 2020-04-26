import React from 'react';
import Layout from '../components/Layout';
import './schedule.css';

type PageContent = {
  date: string;
  title: string;
  description: string;
}[];

export const Component: React.FC<{
  title: string;
  description: string;
  pageContent: PageContent
}> = ({ title, description, pageContent }) => (
  <Layout title={title} description={description}>
    <h1>{title}</h1>
    <p>{description}</p>
    <ul className="timeline">
      {pageContent.map(v => (
        <li className="mb-5">
          <p>{v.date}</p>
          <h5>{v.title}</h5>
          <p>{v.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Component;

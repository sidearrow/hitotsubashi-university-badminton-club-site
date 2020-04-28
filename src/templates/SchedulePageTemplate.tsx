import React from 'react';
import './schedule.css';

type PageContent = {
  date: string;
  title: string;
  description: string;
}[];

export const Component: React.FC<{
  title: string;
  description: string;
  pageContent: PageContent;
}> = ({ title, description, pageContent }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
    <ul className="timeline">
      {pageContent.map((v, i) => (
        <li key={i} className="mb-4">
          <p>{v.date}</p>
          <h5 className="mt-1 mb-2">{v.title}</h5>
          <p>{v.description}</p>
        </li>
      ))}
    </ul>
  </>
);

export default Component;

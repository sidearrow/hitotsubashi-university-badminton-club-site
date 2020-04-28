import React from 'react';
import { PageContentAbout } from '../pageContentType';
import CmpAuthGuard from '../components/CmpAuthGuard';
import StorageLink from '../components/StorageLink';

const MizutoriPageTemplate: React.FC<{
  isPreview: boolean;
  title: string;
  description: string;
  pageContent: {
    id: number;
    year: number;
    name: string;
  }[];
}> = ({ isPreview, title, description, pageContent }) => {
  const obmsgList: { [key: number]: object } = {};
  pageContent.forEach(v => {
    if (!(v.year in obmsgList)) {
      obmsgList[v.year] = [];
    }
    obmsgList[v.year].push(v);
  });
  console.log(obmsgList)

  const main = (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {Object.keys(obmsgList).reverse().map(year => (
        <>
          <h2>{year} 年</h2>
          {obmsgList[year].map(v => (
            <span className="mr-1">
              <StorageLink path={`obmessage/obmessage_${v.id}.pdf`}>{v.name}</StorageLink>
            </span>
          ))}
        </>
      ))}
    </>
  )

  if (isPreview) {
    return main;
  }

  return (<CmpAuthGuard>{main}</CmpAuthGuard>);
};

export default MizutoriPageTemplate;

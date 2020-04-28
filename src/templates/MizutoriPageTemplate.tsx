import React from 'react';
import CmpAuthGuard from '../components/CmpAuthGuard';

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

  const main = (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {Object.keys(obmsgList)
        .reverse()
        .map(year => (
          <>
            <h2>{year} 年</h2>
            {obmsgList[year].map((v, i) => (
              <span className="mr-1" key={i}>
                <a
                  href="#"
                  data-storage={`obmessage/obmessage_${v.id}.pdf`}
                  target="_blank"
                >
                  {v.name}
                </a>
              </span>
            ))}
          </>
        ))}
    </>
  );

  if (isPreview) {
    return main;
  }

  return <CmpAuthGuard>{main}</CmpAuthGuard>;
};

export default MizutoriPageTemplate;

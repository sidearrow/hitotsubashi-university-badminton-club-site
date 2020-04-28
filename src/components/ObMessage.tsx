import React from 'react';
import obMessageJson from '../data/ob_message.json';
import StorageLink from './StorageLink';

type ObMessages = {
  [key: number]: {
    id: number;
    name: string;
  }[];
};

const [obMessages, obMessageYears] = ((): [ObMessages, number[]] => {
  const res: ObMessages = {};
  const years: number[] = [];
  obMessageJson.forEach(v => {
    if (!(v.year in res)) {
      res[v.year] = [];
      years.push(v.year);
    }
    res[v.year].push({ id: v.id, name: v.name });
  });
  return [res, years.sort((a, b) => b - a)];
})();

const ObMessage: React.FC = () => (
  <>
    {obMessageYears.map(year => (
      <div className="content" key={year}>
        <h5>{year}</h5>
        {obMessages[year].map((v, i) => (
          <span
            key={i}
            style={{ display: 'inline-block', marginRight: '0.5rem' }}
          >
            <StorageLink path={`obmessage/obmessage_${v.id}.pdf`} key={i}>
              {v.name}
            </StorageLink>
          </span>
        ))}
      </div>
    ))}
  </>
);

export default ObMessage;

import React from 'react';
import scheduleJson from './schedule.json';

export const Schedule: React.FC = () => {
  return (
    <ul className="timeline">
      {scheduleJson.map((v, i) => (
        <li key={i}>
          <div className="border-b border-gray-400 mb-2">{v.time}</div>
          <div className="font-bold">{v.title}</div>
          <div className="text-gray-600 ml-4">{v.description}</div>
        </li>
      ))}
    </ul>
  );
};

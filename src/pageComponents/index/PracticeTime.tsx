import React from 'react';

import PRACTICE_TIME from './practice_time.json';

const Th: React.FC = ({ children }) => (
  <th className="font-bold text-center bg-gray-200 py-2 px-4">{children}</th>
);

const Td: React.FC = ({ children }) => (
  <td className="text-center py-2 px-4">{children}</td>
);

export const PracticeTime: React.FC = () => {
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
          {PRACTICE_TIME.daysOfWeek.map((v, i) => (
            <tr key={i} className="border-b border-dotted">
              <Td>{v.label}</Td>
              <Td>{v.tsujo}</Td>
              <Td>{v.kyugyo}</Td>
            </tr>
          ))}
          <tr className="border-t">
            <Td>備考</Td>
            <Td>{PRACTICE_TIME.remarks.tsujo}</Td>
            <Td>{PRACTICE_TIME.remarks.kyugyo}</Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

import React from 'react';

export const Table: React.FC = ({ children }) => (
  <div className="table-scroll">
    <table className="w-full">{children}</table>
  </div>
);

export const Th: React.FC = ({ children }) => (
  <th className="font-bold text-center bg-gray-200 py-2 px-4">{children}</th>
);

export const Td: React.FC = ({ children }) => (
  <td className="text-center py-2 px-4">{children}</td>
);

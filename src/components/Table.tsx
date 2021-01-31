import React from 'react';

export const Table: React.FC = ({ children }) => (
  <div className="overflow-auto">
    <table className="table-auto">{children}</table>
  </div>
);

export const Th: React.FC = ({ children }) => (
  <th className="font-bold bg-gray-200 py-2 px-4 border">{children}</th>
);

type TdProps = {
  align?: 'center';
};

export const Td: React.FC<TdProps> = ({ align, children }) => {
  const classes = ['px-4', 'py-2', 'border'];
  if (align === 'center') {
    classes.push('text-center');
  }

  return <td className={classes.join(' ')}>{children}</td>;
};

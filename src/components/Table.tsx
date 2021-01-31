import React from 'react';

export const Table: React.FC = ({ children }) => (
  <div className="overflow-auto">
    <table className="table-auto whitespace-nowrap w-full">{children}</table>
  </div>
);

export const Th: React.FC = ({ children }) => (
  <th className="font-bold bg-gray-200 py-1 px-2 border">{children}</th>
);

type TdProps = {
  align?: 'center';
  col?: number;
};

export const Td: React.FC<TdProps> = ({ align, col, children }) => {
  const classes = ['px-2', 'py-1', 'border'];
  if (align === 'center') {
    classes.push('text-center');
  }
  col = col || 1;

  return (
    <td className={classes.join(' ')} colSpan={col}>
      {children}
    </td>
  );
};

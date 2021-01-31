import React from 'react';

export const Table: React.FC = ({ children }) => (
  <div className="overflow-auto">
    <table className="table-auto whitespace-nowrap w-full">{children}</table>
  </div>
);

export const Th: React.FC = ({ children }) => (
  <th className="font-bold bg-gray-200 py-1 px-2 border">{children}</th>
);

type TdProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableCellElement
>;

export const Td: React.FC<TdProps> = (props) => {
  const baseClasses = ' px-2 py-1 border';
  const className = `${props.className || ''} ${baseClasses}`;

  return <td {...props} className={className} />;
};

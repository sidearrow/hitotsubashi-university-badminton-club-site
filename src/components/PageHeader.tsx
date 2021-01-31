import React from 'react';

type PageHeaderProps = {
  description: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  description,
  children,
}) => (
  <div className="p-4 bg-gray-100">
    <h1 className="text-xl font-bold">{children}</h1>
    <div className="">{description}</div>
  </div>
);

import React from 'react';
import { Link } from 'gatsby';

export const CmpBreadcrumb: React.FC<{
  breadcrumb: {
    text: string;
    path: string | null;
  }[];
}> = ({ breadcrumb }) => (
  <nav>
    <ul className="breadcrumb bg-transparent">
      {breadcrumb.map((v, i) => (
        <li
          key={i}
          className={`breadcrumb-item ${v.path === null ? 'active' : ''}`}
        >
          {v.path !== null ? <Link to={v.path}>{v.text}</Link> : <>{v.text}</>}
        </li>
      ))}
    </ul>
  </nav>
);

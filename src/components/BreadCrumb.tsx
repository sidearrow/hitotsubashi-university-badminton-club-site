import React from 'react';
import { Link } from 'gatsby';

const Breadcrumb: React.FC<{
  breadcrumb: {
    text: string;
    path: string | null;
  }[];
}> = ({ breadcrumb }) => (
  <nav className="breadcrumb">
    <ul>
      {breadcrumb.map((v, i) => (
        <li key={i} className={v.path === null ? 'is-active' : ''}>
          <Link to={v.path || ''}>{v.text}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;

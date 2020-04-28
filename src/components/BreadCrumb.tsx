import React from 'react';
import { Link } from 'gatsby';

const Breadcrumb: React.FC<{
  breadcrumb: {
    text: string;
    path: string | null;
  }[];
}> = ({ breadcrumb }) => (
  <nav className="mb-5">
    <ul className="breadcrumb bg-transparent">
      {breadcrumb.map(v => {
        if (v.path === null) {
          return <li className="breadcrumb-item active">{v.text}</li>;
        }

        return (
          <li className="breadcrumb-item">
            <Link to={v.path}>{v.text}</Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Breadcrumb;

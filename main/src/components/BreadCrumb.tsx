import React from 'react';
import { Link } from 'gatsby';

export type BreadCrumbLink = {
  text: string;
  path: string | null;
};

const BreadCrumb: React.FC<{ props: BreadCrumbLink[] }> = ({ props }) => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>{props.map(link => (
    <li className={link.path === null ? 'is-active' : ''}>
      <Link to={link.path || '#'}>{link.text}</Link>
    </li>
    ))}</ul>
  </nav>
);

export default BreadCrumb;

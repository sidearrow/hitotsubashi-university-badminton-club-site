import React from 'react';
import Link from 'next/link';

export type BreadcrumbItems = {
  text: string;
  path: string | null;
}[];

export const Breadcrumb: React.FC<{ items: BreadcrumbItems }> = ({ items }) => (
  <nav>
    <ul className="breadcrumb bg-transparent">
      {items.map((v, i) => (
        <li
          key={i}
          className={`breadcrumb-item ${v.path === null ? 'active' : ''}`}
        >
          {v.path !== null ? (
            <Link href={v.path}>
              <a>{v.text}</a>
            </Link>
          ) : (
              <>{v.text}</>
            )}
        </li>
      ))}
    </ul>
  </nav>
);

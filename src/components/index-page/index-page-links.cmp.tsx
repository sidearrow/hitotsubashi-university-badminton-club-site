import React from 'react';
import links from './index_page_links.json';
import { Link } from 'gatsby';

const CmpIndexPageLinks: React.FC = () => (
  <div className="form-row" style={{ textAlign: 'center' }}>
    {links.map((col, i) => (
      <div className="col-md-6" key={i}>
        <h5>{col.title}</h5>
        {col.links.map((link, i) => (
          <div key={i}>
            <Link to={link.path}>{link.text}</Link>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export { CmpIndexPageLinks };

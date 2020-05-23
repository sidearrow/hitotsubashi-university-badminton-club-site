import React from 'react';
import { Link } from 'gatsby';
import navLinks from './navbar-links.json';

export const CmpNav: React.FC = () => (
  <div className="row justify-content-center">
    {navLinks.map((v, i) => {
      return (
        <div className="col-sm-3 col-lg-2" key={i}>
          <h5>{v.text}</h5>
          <section>
            {v.links?.map((v, i) => (
              <div key={i}>
                <Link to={v.path} className="navbar-item">
                  {v.text}
                </Link>
              </div>
            ))}
          </section>
        </div>
      );
    })}
  </div>
);

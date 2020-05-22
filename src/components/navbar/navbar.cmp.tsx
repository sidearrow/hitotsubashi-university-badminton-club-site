import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import navLinks from './navbar-links.json';

const CmpNavLinks: React.FC = () => (
  <>
    {navLinks.map((v, i) => {
      if ('links' in v) {
        return (
          <div className="navbar-item has-dropdown is-hoverable" key={i}>
            <a className="navbar-link">{v.text}</a>
            <div className="navbar-dropdown">
              {v.links?.map((v, i) => (
                <Link key={i} to={v.path} className="navbar-item">
                  {v.text}
                </Link>
              ))}
            </div>
          </div>
        );
      }

      return (
        <Link to={v.path} className="navbar-item" key={i}>
          {v.text}
        </Link>
      );
    })}
  </>
);

const CmpNavbar: React.FC = () => {
  const [navbarMenuIsActive, setNavbarMenuIsActive] = useState(false);

  return (
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} style={{ height: '100%' }} />
            <span style={{ marginLeft: '0.8rem' }}>一橋大学</span>
            <span style={{ marginLeft: '0.5rem' }}>バドミントン部</span>
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            onClick={() => {
              setNavbarMenuIsActive(!navbarMenuIsActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${navbarMenuIsActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <CmpNavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { CmpNavbar };

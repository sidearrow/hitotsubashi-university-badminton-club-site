import { Link } from 'gatsby';
import React from 'react';
import logo from '../assets/img/logo.svg';
import { Navbar, NavDropdown } from 'react-bootstrap';
import navLinks from '../data/nav-links.json';

const CmpNavLinks: React.FC = () => (
  <ul className="navbar-nav ml-auto">
    {navLinks.map((v, i) => {
      if ('links' in v) {
        return (
          <NavDropdown title={v.text} id="nav-dropdown">
            {v.links?.map((v, i) => (
              <NavDropdown.Item key={i} href={v.path}>
                {v.text}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        );
      }

      return (
        <li className="nav-item" key={i}>
          <Link to={v.path} className="nav-link">
            {v.text}
          </Link>
        </li>
      );
    })}
  </ul>
);

const CmpNavbar: React.FC = () => {
  return (
    <>
      <Navbar className="shadow" expand="lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} height="50px" />
          </Link>
          <Link
            to="/"
            className="navbar-brand d-inline-block mr-auto"
            style={{ lineHeight: 1.3 }}
          >
            一橋大学
            <br />
            バドミントン部
          </Link>
          <Navbar.Toggle className="border-0" />
          <Navbar.Collapse className="justify-content-end">
            <CmpNavLinks />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default CmpNavbar;

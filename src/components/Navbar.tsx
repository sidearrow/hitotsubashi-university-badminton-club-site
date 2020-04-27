import { Link } from "gatsby"
import React, { useState } from "react"
import logo from '../assets/img/logo.svg';
import { Navbar } from 'react-bootstrap';

type NavLink = {
  text: string;
  path: string;
}
type NavLinks = NavLink[];

const navLinks: NavLinks = [
  {
    text: '部活情報',
    path: '/about',
  },
  {
    text: '部員情報',
    path: '/member',
  },
  {
    text: '大会情報',
    path: '/result',
  },
  {
    text: '掲示板',
    path: '/bbs',
  },
  {
    text: 'みずとり会',
    path: '/mizutori'
  }
];

const CmpNavbar: React.FC = () => {
  const cmpNavLinks = (links: NavLinks) => (
    <ul className="navbar-nav ml-auto">
      {links.map((v, i) => (
        <li className="nav-item" key={i}>
          <Link to={v.path} className="nav-link">{v.text}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="shadow" expand="lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} height="50px" />
          </Link>
          <Link to="/" className="navbar-brand d-inline-block mr-auto" style={{ lineHeight: 1.3 }}>一橋大学<br />バドミントン部</Link>
          <Navbar.Toggle className="border-0" />
          <Navbar.Collapse className="justify-content-end">
            {cmpNavLinks(navLinks)}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default CmpNavbar;

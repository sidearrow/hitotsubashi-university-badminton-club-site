import { Link } from "gatsby"
import React, { useState } from "react"
import logo from '../assets/img/logo.svg';

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
];

const Navbar: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const handleToggleMenu = () => setIsShow(!isShow);

  const cmpNavLinks = (links: NavLinks) => (
    <ul className="navbar-nav ml-auto">
      {links.map((v, i) => (
        <li className="nav-item" key={i}>
          <Link to={v.path} className="nav-link">{v.text}</Link>
        </li>
      ))}<li className="nav-item">
        <a href="#" className="nav-link">みずとり会</a>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex">
          <Link to="/" className="navbar-brand">
            <img src={logo} height="50px" />
          </Link>
          <Link to="/" className="navbar-brand d-inline-block mr-auto" style={{ lineHeight: 1.3 }}>一橋大学<br />バドミントン部</Link>
          <button className="navbar-toggler border-0" type="button" onClick={handleToggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse collapse ${isShow ? 'show' : ''}`}>
            {cmpNavLinks(navLinks)}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

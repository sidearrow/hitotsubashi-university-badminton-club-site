import { Link, navigate } from "gatsby"
import React, { useState, useContext } from "react"
import { AuthContext, AuthStatus } from "../AuthProvider";
import Auth from "../auth";
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
  {
    text: 'みずとり会',
    path: '/mizutori',
  }
];

const Navbar: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const handleToggleMenu = () => setIsShow(!isShow);

  const cmpNavLinks = (links: NavLinks) => (
    <ul className="navbar-nav ml-auto">
      {links.map((v, i) => (
        <li className="nav-item">
          <Link to={v.path} className="nav-link" key={i}>{v.text}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex">
          <Link to="/" className="">
            <img src={logo} height="60px" />
          </Link>
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

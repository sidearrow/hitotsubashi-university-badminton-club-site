import { Link, navigate } from "gatsby"
import React, { useState, useContext } from "react"
import { AuthContext, AuthStatus } from "../AuthProvider";
import Auth from "../auth";

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

  const logout = () => {
    (new Auth).logout();
    navigate('/mizutori/login');
  };

  const authStatus = useContext(AuthContext);

  const cmpNavLinks = (links: NavLinks) => (
    <ul className="navbar-nav">
      {links.map((v, i) => (
        <li className="nav-item">
          <Link to={v.path} className="nav-link" key={i}>{v.text}</Link>
        </li>
      ))}
      {/*
      <Link className="navbar-link" to={authStatus === AuthStatus.Login ? 'mizutori' : ''}>
        <span style={{ marginRight: '1rem' }}>みずとり会</span>
        {authStatus === AuthStatus.NotLogin
          && (<span className="tag is-light">未ログイン</span>)}
        {authStatus === AuthStatus.Login
          && (<span className="tag is-light">ログイン中</span>)}
      </Link>
      <div className="navbar-dropdown">
        {authStatus !== AuthStatus.Login
          && (<Link className="navbar-item" to="/mizutori-login">ログインページ</Link>)}
        {authStatus === AuthStatus.Login
          && (<a className="navbar-item" onClick={logout}>ログアウト</a>)}
      </div>
        */}
    </ul>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-main">
        <div className="container">
          <Link to="/" className="navbar-brand">一橋大学<br />バドミントン部</Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse ${isShow ? 'is-active' : ''}`}>
            {cmpNavLinks(navLinks)}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

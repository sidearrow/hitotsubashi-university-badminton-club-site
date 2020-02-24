import { Link, navigate } from "gatsby"
import React, { useState, useContext } from "react"
import { AuthContext, AuthStatus } from "../AuthProvider";
import Auth from "../auth";

type NavLink = {
  text: string;
  path: string;
}
type NavLinkDropdown = {
  text: string;
  links: NavLink[];
}
type NavLinks = (NavLink | NavLinkDropdown)[];

const navLinks: NavLinks = [
  {
    text: '部活情報',
    links: [
      {
        text: '部活概要',
        path: '/info',
      },
      {
        text: '部員情報',
        path: '/member',
      },
      {
        text: '年間スケジュール',
        path: '/schedule',
      },
    ],
  },
  {
    text: '大会情報',
    links: [
      {
        text: 'リーグ戦',
        path: '/result/league',
      },
      {
        text: '東商戦',
        path: '/result/tosho',
      },
      {
        text: '三商戦',
        path: '/result/sansho',
      },
      {
        text: '三多摩大会',
        path: '/santama',
      }
    ]
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
    <>
      {links.map((v, i) => {
        return 'links' in v
          ? (
            <div className="navbar-item has-dropdown is-hoverable" key={i}>
              <a className="navbar-link">{v.text}</a>
              <div className="navbar-dropdown">{
                v.links.map((w, j) => (
                  <Link className="navbar-item" to={w.path} key={j}>{w.text}</Link>
                ))
              }</div>
            </div>
          )
          : (
            <Link to={v.path} className="navbar-item" key={i}>{v.text}</Link>
          );
      })}
      <div className="navbar-item has-dropdown is-hoverable">
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
      </div>
    </>
  );

  return (
    <>
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-size-5">一橋大学 バドミントン部</Link>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={handleToggleMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${isShow ? 'is-active' : ''}`}>
            <div className="navbar-end">
              {cmpNavLinks(navLinks)}
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Navbar;

import { Link } from "gatsby"
import React, { useState } from "react"

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
  {
    text: 'みずとり会',
    path: '/mizutori',
  }
];

const Navbar: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const handleToggleMenu = () => setIsShow(!isShow);

  const cmpNavLinks = (links: NavLinks) => (
    <>
      {links.map((v, i) => {
        return 'links' in v
          ? (
            <li className="navbar-item has-dropdown is-hoverable" key={i}>
              <a className="navbar-link">{v.text}</a>
              <div className="navbar-dropdown">{
                v.links.map((w, j) => (
                  <Link className="navbar-item" to={w.path} key={j}>{w.text}</Link>
                ))
              }</div>
            </li>
          )
          : (
            <Link to={v.path} className="navbar-item" key={i}>{v.text}</Link>
          );
      })}
    </>
  );

  return (
    <>
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">一橋大学 バドミントン部</Link>
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

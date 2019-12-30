import React from 'react'
import Link from 'next/link'

const Nav = () => {
  const menuArray = [
    {
      text: "部活情報",
      path: "/about",
    },
    {
      text: "部員情報",
      path: "/member-intro",
    },
    {
      text: "大会結果",
      path: "/result",
    },
    {
      text: "三多摩大会",
      path: "/santama",
    },
    {
      text: "掲示板",
      path: "/bbs",
    },
    {
      text: "みずとり会",
      path: "/mizutori",
    },
  ];

  const [isActiveMenu, setIsActiveMeun] = React.useState(false);
  const handleToggleMenu = () => {
    setIsActiveMeun(!isActiveMenu);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">一橋大学 バドミントン部</a>
        </Link>
        <a role="button" className={`navbar-burger burger ${isActiveMenu ? 'is-active' : ''}`} onClick={handleToggleMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActiveMenu ? 'is-active' : ''}`}>
        <div className="navbar-start">
          {menuArray.map((menu, i) => (
            <Link href={menu.path} key={i}>
              <a className="navbar-item" onClick={handleToggleMenu}>{menu.text}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav

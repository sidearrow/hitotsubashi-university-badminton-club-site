import React from "react"
import Link from "next/link";

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
]

const Navbar: React.FC = () => {

  const [isActiveMenu, setIsActiveMeun] = React.useState(false);
  const handleToggleMenu = () => {
    setIsActiveMeun(!isActiveMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-main navbar-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" style={{ lineHeight: 1.3 }}>一橋大学<br />バドミントン部</a>
        </Link>
        <button className="navbar-toggler border-0" type="button" onClick={handleToggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse collapse ${isActiveMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            {menuArray.map((menu, i) => (
              <li className="nav-item" key={i}>
                <Link href={menu.path}>
                  <a className="nav-link" onClick={handleToggleMenu}>{menu.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar

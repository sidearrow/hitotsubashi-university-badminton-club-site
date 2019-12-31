import { Link } from "gatsby"
import React from "react"

const menuArray = [
  {
    text: "部活情報",
    path: "/info",
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
]

const Component: React.FC = () => {

  const [isActiveMenu, setIsActiveMeun] = React.useState(false);
  const handleToggleMenu = () => {
    setIsActiveMeun(!isActiveMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-main navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{lineHeight: 1.3}}>一橋大学<br/>バドミントン部</Link>
        <button className="navbar-toggler border-0" type="button" onClick={handleToggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse collapse ${isActiveMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            {menuArray.map((menu, i) => (
              <li className="nav-item" key={i}>
                <Link to={menu.path} className="nav-link" onClick={handleToggleMenu}>{menu.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Component

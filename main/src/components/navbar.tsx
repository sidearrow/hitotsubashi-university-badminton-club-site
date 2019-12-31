import { Link } from "gatsby"
import React from "react"
import config from "../config/configIndex";

const menuList = [
  config.pageMetadata.infoIndex,
  config.pageMetadata.infoMember,
  config.pageMetadata.resultIndex,
  config.pageMetadata.resultLeague,
  config.pageMetadata.bbs,
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
            {menuList.map((menu, i) => (
              <li className="nav-item" key={i}>
                <Link to={menu.path} className="nav-link" onClick={handleToggleMenu}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Component

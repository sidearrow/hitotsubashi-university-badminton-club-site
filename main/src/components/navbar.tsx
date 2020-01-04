import { Link } from "gatsby"
import React from "react"
import config from "../config/configIndex";

const menuList = [
  config.pageMetadata.infoIndex,
  config.pageMetadata.resultIndex,
  config.pageMetadata.santama,
  config.pageMetadata.bbs,
]

const Component: React.FC = () => {
  const [isActiveMenu, setIsActiveMeun] = React.useState(false);
  const handleToggleMenu = () => {
    setIsActiveMeun(!isActiveMenu);
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-white navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">一橋大学 バドミントン部</Link>
          <button className="navbar-toggler border-0" type="button" onClick={handleToggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm bg-white navbar-light border-bottom border-dark pb-0">
        <div className={`container collapse d-sm-block ${isActiveMenu ? 'show' : 'd-none'}`}>
          <div className="row">
            {menuList.map((menu, i) => (
              <Link to={menu.path} className="hub-nav-link col-sm-3 col-12 text-sm-center mb-sm-0 mb-2" onClick={handleToggleMenu} key={i}>{menu.title}</Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Component

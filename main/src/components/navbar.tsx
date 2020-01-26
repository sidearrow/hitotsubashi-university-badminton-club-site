import { Link } from "gatsby"
import React from "react"
import logo from '../assets/img/logo.png';

import menuList from '../data/nav_list.json';

const Component: React.FC = () => {
  const [isActiveMenu, setIsActiveMeun] = React.useState(false);
  const handleToggleMenu = () => {
    setIsActiveMeun(!isActiveMenu);
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-white navbar-light">
        <div className="container">
          <Link to="/" >
            <img src={logo} style={{maxWidth: 'calc(100% - 50px)'}} />
          </Link>
          <button className="navbar-toggler border-0 position-absolute" type="button" onClick={handleToggleMenu} style={{right:0}}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm bg-white navbar-light border-bottom border-dark pb-0">
        <div className={`container collapse d-sm-block ${isActiveMenu ? 'show' : 'd-none'}`}>
          <div className="row">
            {menuList.map((menu, i) => (
              <Link to={menu.path} className="hub-nav-link col-sm-2 col-12 text-sm-center mb-sm-0 mb-2 text-nowrap" onClick={handleToggleMenu} key={i}>{menu.text}</Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Component

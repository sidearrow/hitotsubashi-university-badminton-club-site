import { Link } from "gatsby"
import React from "react"
import logo from '../assets/img/logo.png';

import menuList from '../data/nav_list.json';

const Header: React.FC = () => (
  <>
    <nav className="navbar bg-white navbar-light">
      <div className="container-fluid main-container">
        <Link to="/" >
          <img src={logo} style={{ maxWidth: '100%' }} />
        </Link>
      </div>
    </nav>
    <div className="position-relative bg-white">
      <div className="container-fluid main-container header-nav-box">
        {menuList.map((menu, i) => (
            <Link to={menu.path} className="header-nav-item" key={i}>{menu.text}</Link>
        ))}
      </div>
    </div>
  </>
);

export default Header;

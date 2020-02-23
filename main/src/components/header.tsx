import { Link } from "gatsby"
import React, { useState, useCallback } from "react"

import menuList from '../data/nav_list.json';

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const handleToggleMenu = () => setIsShow(!isShow);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <Link to="/" className="navbar-brand">一橋大学 バドミントン部</Link>
          <button className="navbar-toggler border-0" type="button" onClick={handleToggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isShow ? '' : 'd-none'}`}>
            <ul className="navbar-nav ml-auto">
              {menuList.map((menu, i) => (
                <li className="nav-item" key={i}>
                  <Link to={menu.path} className="nav-link text-dark">{menu.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

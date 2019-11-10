import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

type Menu = {
  text: string,
  path: string,
};

const menuArray: Menu[] = [
  { text: '部活情報', path: '/about' },
  { text: '部員情報', path: '/member' },
  { text: '大会結果', path: '/result' },
  { text: '三多摩大会', path: '/santama' },
  { text: '掲示板', path: '/bbs' },
  { text: 'みずとり会', path: '/mizutori' },
];

const Navbar: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsShowMenu(!isShowMenu);
  }, [isShowMenu]);

  return (
    <nav className="navbar border-bottom border-secondary navbar-light bg-transparent navbar-expand-md">
      <Link className="navbar-brand" to="/">一橋大学<br />バドミントン部</Link>
      <button type="button" className="border-0 navbar-toggler" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={'ml-md-3 navbar-collapse collapse' + (isShowMenu ? ' show' : '')}>
        <ul className="navbar-nav">
          {
            menuArray.map((menu, i) => {
              return (
                <li key={i} className="navbar-item">
                  <Link to={menu.path} className="nav-link" onClick={toggleMenu}>{menu.text}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

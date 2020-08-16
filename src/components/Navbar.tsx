import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faBars,
  faTimes,
  faLock,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import { config } from '../config';

const MenuToggleIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (isOpen) {
    return <FontAwesomeIcon icon={faTimes} />;
  }
  return <FontAwesomeIcon icon={faBars} />;
};

const NavLinkBox: React.FC = ({ children }) => {
  return (
    <span className="text-gray-900 hover:text-gray-600">
      <div className="flex justify-between px-4 py-2 border-gray-200 items-center">
        {children}
      </div>
    </span>
  );
};

const NAV_LINKS = [
  { text: '部活紹介', path: 'about' },
  { text: '部員紹介', path: 'member' },
  { text: '大会結果', path: 'result/index' },
  { text: '三多摩大会', path: 'santama' },
];

const NavContent: React.FC = () => (
  <div className="border-t bg-white z-10 py-4">
    <div className="grid md:grid-cols-2 mx-auto max-w-screen-sm">
      {NAV_LINKS.map((v, i) => (
        <Link href={v.path} key={i}>
          <a>
            <NavLinkBox>
              <div>{v.text}</div>
              <FontAwesomeIcon icon={faChevronRight} />
            </NavLinkBox>
          </a>
        </Link>
      ))}
      <a href="/mizutori">
        <NavLinkBox>
          <div>みずとり会</div>
          <div>
            <FontAwesomeIcon icon={faLock} />
            <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
          </div>
        </NavLinkBox>
      </a>
      <a href={config.url.bbs} target="_blank" rel="noreferrer">
        <NavLinkBox>
          <div>掲示板</div>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </NavLinkBox>
      </a>
    </div>
  </div>
);

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed bg-white w-full z-10 border-b border-gray-300">
      <div className="py-4">
        <div className="flex justify-between items-center px-4 mx-auto max-w-screen-sm">
          <Link href="/">
            <a className="text-gray-900 hover:text-gray-600">
              一橋大学バドミントン部
            </a>
          </Link>
          <button
            className="text-lg px-2 text-gray-900 hover:text-gray-600"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <MenuToggleIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>
      {isMenuOpen && <NavContent />}
    </div>
  );
};

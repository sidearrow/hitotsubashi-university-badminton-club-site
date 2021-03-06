import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar: React.FC<{
  toggleMenuShow: () => void;
}> = ({ toggleMenuShow }) => {
  return (
    <nav className="p-4">
      <div className="flex flex-row justify-between items-center max-w-screen-lg mx-auto">
        <Link href="/">
          <a className="navbar-item">一橋大学バドミントン部</a>
        </Link>
        <button
          className="md:hidden text-lg"
          onClick={() => {
            toggleMenuShow();
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

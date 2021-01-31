import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CONFIG } from '../config';

const socailIconLinkList = [
  { icon: faTwitter, href: CONFIG.url.twitter },
  { icon: faInstagram, href: CONFIG.url.instagram },
];

export const Navbar: React.FC<{
  toggleMenuShow: () => void;
}> = ({ toggleMenuShow }) => {
  return (
    <nav className="p-4">
      <div className="flex flex-row justify-between items-center max-w-screen-lg mx-auto">
        <Link href="/">
          <a className="navbar-item font-bold">一橋大学バドミントン部</a>
        </Link>
        <div className="text-lg">
          {socailIconLinkList.map((v, i) => (
            <a
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
              key={i}
            >
              <FontAwesomeIcon icon={v.icon} />
            </a>
          ))}
        </div>
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

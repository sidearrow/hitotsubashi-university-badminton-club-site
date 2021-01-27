import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faLock,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { CONFIG } from '../config';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  {
    text: 'HOME',
    path: '/',
    icon: <FontAwesomeIcon icon={faChevronRight} />,
    isTargetBlank: false,
  },
  {
    text: '活動場所・スケジュール',
    path: '/place-schedule',
    icon: <FontAwesomeIcon icon={faChevronRight} />,
    isTargetBlank: false,
  },
  {
    text: '部員紹介',
    path: '/member',
    icon: <FontAwesomeIcon icon={faChevronRight} />,
    isTargetBlank: false,
  },
  {
    text: '大会情報',
    path: '/tournaments',
    icon: <FontAwesomeIcon icon={faChevronRight} />,
    isTargetBlank: false,
  },
  {
    text: '三多摩大会',
    path: '/santama',
    icon: <FontAwesomeIcon icon={faChevronRight} />,
    isTargetBlank: false,
  },
  {
    text: 'みずとり会',
    path: '/mizutori',
    icon: (
      <div>
        <FontAwesomeIcon icon={faLock} />
        <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
      </div>
    ),
    isTargetBlank: false,
  },
  {
    text: '掲示板',
    path: CONFIG.url.bbs,
    icon: <FontAwesomeIcon icon={faExternalLinkAlt} />,
    isTargetBlank: true,
  },
];

const NavLinkBox: React.FC = ({ children }) => {
  return (
    <span className="text-gray-900 hover:text-gray-600">
      <div className="flex justify-between px-4 py-2 border-gray-200 items-center">
        {children}
      </div>
    </span>
  );
};

const LinkWrapper: React.FC<{ href: string; isTargetBlank: boolean }> = ({
  href,
  isTargetBlank,
  children,
}) => {
  if (isTargetBlank) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

const NavbarContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    {NAV_LINKS.map((v, i) => (
      <div key={i}>
        <LinkWrapper href={v.path} isTargetBlank={v.isTargetBlank}>
          <NavLinkBox>
            <div>{v.text}</div>
            {v.icon}
          </NavLinkBox>
        </LinkWrapper>
      </div>
    ))}
  </div>
);

const NavbarBox: React.FC = ({ children }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="px-4 mx-auto max-w-screen-sm">{children}</div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isShowContent, setIsShowContent] = useState(false);
  const toggleContent = () => {
    setIsShowContent(!isShowContent);
  };

  return (
    <div className="fixed w-full z-10">
      <div style={{ backgroundColor: '#ac2926' }}>
        <NavbarBox>
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="text-lg text-white hover:text-gray-200">
                一橋大学バドミントン部
              </a>
            </Link>
            <button
              className="text-lg px-2 text-white hover:text-gray-200"
              onClick={toggleContent}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </NavbarBox>
      </div>
      {isShowContent && (
        <div className="bg-white">
          <NavbarBox>
            <NavbarContent />
          </NavbarBox>
        </div>
      )}
    </div>
  );
};

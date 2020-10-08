import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faLock,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { CONFIG } from '../config';
import { BtnLink, InstagramBtnLink, TwitterBtnLink } from './BtnLink';
import { headings } from '../pages';

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
    isTargetBlank: true,
  },
  {
    text: '掲示板',
    path: CONFIG.url.bbs,
    icon: <FontAwesomeIcon icon={faExternalLinkAlt} />,
    isTargetBlank: true,
  },
];

export const AMP_SIDEBAR_ID = 'ampSidebarId';

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

export const NavContent: React.FC = () => (
  <ul>
    {NAV_LINKS.map((v, i) => (
      <li key={i}>
        <LinkWrapper href={v.path} isTargetBlank={v.isTargetBlank}>
          <NavLinkBox>
            <div>{v.text}</div>
            {v.icon}
          </NavLinkBox>
        </LinkWrapper>
      </li>
    ))}
  </ul>
);

const AMP_SIDEBAR_STYLE: React.CSSProperties = {
  width: '300px',
  maxWidth: '90%',
};

export const AmpSidebar: React.FC = () => {
  return (
    <amp-sidebar
      id={AMP_SIDEBAR_ID}
      layout="nodisplay"
      style={AMP_SIDEBAR_STYLE}
    >
      <div className="w-full h-full bg-white">
        <div className="py-4 text-center">MENU</div>
        <div className="px-4">
          <div className="py-1">HOME</div>
          <div className="pl-2">
            {(Object.keys(headings) as (keyof typeof headings)[])
              .filter((k) => k !== 'sns')
              .map((k) => (
                <div key={k}>
                  <Link href={`/#${headings[k].id}`}>
                    <a>#{headings[k].text}</a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <NavContent />
        <div className="py-2">
          <div className="py-1 px-4">
            <TwitterBtnLink />
          </div>
          <div className="py-1 px-4">
            <InstagramBtnLink />
          </div>
        </div>
      </div>
    </amp-sidebar>
  );
};

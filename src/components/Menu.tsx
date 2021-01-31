import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CONFIG } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  {
    text: 'HOME',
    path: '/',
  },
  {
    text: '年間スケジュール',
    path: '/annual-schedule',
  },
  {
    text: '練習スケジュール',
    path: '/practice-schedule',
  },
  {
    text: '部員紹介',
    path: '/member',
  },
  {
    text: '大会情報',
    path: '/tournaments',
  },
  {
    text: '三多摩大会',
    path: '/santama',
  },
  {
    text: 'みずとり会',
    path: '/mizutori',
  },
  {
    text: (
      <>
        <span>掲示板</span>
        <span className="ml-2">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </span>
      </>
    ),
    path: CONFIG.url.bbs,
  },
];

type MenuItemProps = {
  isActive: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ children, isActive }) => {
  return (
    <div className="px-4 py-1">
      <div>{children}</div>
    </div>
  );
};

export const Menu: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <aside>
      {menuItems.map((item, i) => (
        <MenuItem key={i} isActive={item.path === pathname}>
          <Link href={item.path}>
            <a>{item.text}</a>
          </Link>
        </MenuItem>
      ))}
    </aside>
  );
};

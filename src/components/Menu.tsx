import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CONFIG } from '../config';
import { ExternalLink } from './ExternalLink';

const menuItems = [
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
    text: '関東大学リーグ戦結果',
    path: '/league-result',
  },
  {
    text: '三多摩大会',
    path: '/santama',
  },
  {
    text: 'みずとり会',
    path: '/mizutori',
  },
];

type MenuItemProps = {
  isActive: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ children, isActive }) => {
  return (
    <div className={`px-2 py-1 ${isActive ? ' bg-gray-200' : ''}`}>
      <div>{children}</div>
    </div>
  );
};

export const Menu: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <aside className="p-4">
      {menuItems.map((item, i) => (
        <Link href={item.path} key={i}>
          <a>
            <MenuItem isActive={item.path === pathname}>{item.text}</MenuItem>
          </a>
        </Link>
      ))}
      <MenuItem isActive={false}>
        <ExternalLink href={CONFIG.url.bbs}>掲示板</ExternalLink>
      </MenuItem>
    </aside>
  );
};

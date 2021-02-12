import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    text: 'リーグ戦結果',
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
    <div
      className={`px-4 py-1 whitespace-nowrap ${
        isActive ? ' bg-gray-100' : ''
      }`}
    >
      {children}
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
    </aside>
  );
};

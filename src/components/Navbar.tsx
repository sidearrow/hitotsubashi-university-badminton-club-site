import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AMP_SIDEBAR_ID } from './AmpSidebar';

export const Navbar: React.FC = () => {
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
            on={`tap:${AMP_SIDEBAR_ID}.toggle`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

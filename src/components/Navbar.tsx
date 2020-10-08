import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AMP_SIDEBAR_ID } from './AmpSidebar';
import { useAmp } from 'next/amp';

export const Navbar: React.FC = () => {
  const isAmp = useAmp();
  return (
    <div className="fixed bg-white w-full z-10 border-b border-gray-300">
      <div className="py-4">
        <div className="flex justify-between items-center px-4 mx-auto max-w-screen-sm">
          {isAmp ? (
            <Link href="/">
              <a className="text-gray-900 hover:text-gray-600">
                一橋大学バドミントン部
              </a>
            </Link>
          ) : (
              <a href="/" className="text-gray-900 hover:text-gray-600">
                一橋大学バドミントン部
              </a>
            )}
          <button
            className="text-lg px-2 text-gray-900 hover:text-gray-600"
            on={`tap:${AMP_SIDEBAR_ID}.toggle`}
          >
            {isAmp && <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { CONFIG } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socailIconLinkList = [
  { icon: faTwitter, href: CONFIG.url.twitter },
  { icon: faInstagram, href: CONFIG.url.instagram },
];

export const Footer: React.FC = () => (
  <footer className="bg-gray-300 text-gray-700 py-8">
    <div className="text-center">
      {socailIconLinkList.map((v, i) => (
        <a
          href={v.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 text-2xl text-gray-700"
          key={i}
        >
          <FontAwesomeIcon icon={v.icon} />
        </a>
      ))}
    </div>
    <div className="text-center text-sm pt-8">
      {`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}
    </div>
  </footer>
);

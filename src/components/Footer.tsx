import React from 'react';
import { config } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const socailIconLinkList = [
  { icon: faTwitter, href: config.url.twitter },
  { icon: faInstagram, href: config.url.instagram },
  { icon: faGithub, href: config.url.github },
];

export const Footer: React.FC = () => (
  <footer className="bg-gray-300 text-gray-700 py-8">
    <section className="text-center">
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
    </section>
    <div className="text-center text-sm pt-8">
      {`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}
    </div>
  </footer>
);

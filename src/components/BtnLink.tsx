import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { CONFIG } from '../config';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const BtnLink: React.FC<{
  href: string;
  icon: FontAwesomeIconProps['icon'];
  text: string;
}> = ({ href, icon, text }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <div
      className="flex items-center justify-between rounded border-2 px-4 py-2 hover:bg-gray-200"
      style={{ borderColor: '#ac2926' }}
    >
      <span className="text-2xl">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="font-serif font-bold">{text}</span>
    </div>
  </a>
);

export const TwitterBtnLink: React.FC = () => (
  <BtnLink href={CONFIG.url.twitter} icon={faTwitter} text="Twitter" />
);
export const InstagramBtnLink: React.FC = () => (
  <BtnLink href={CONFIG.url.instagram} icon={faInstagram} text="Instagram" />
);

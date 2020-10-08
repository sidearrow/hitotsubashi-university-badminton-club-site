import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { CONFIG } from '../config';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from './Button';

export const BtnLink: React.FC<{
  href: string;
  icon: FontAwesomeIconProps['icon'];
  text: string;
}> = ({ href, icon, text }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Button color="gray">
      <div className="flex items-center justify-between">
        <span className="text-2xl">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="text-lg">{text}</span>
      </div>
    </Button>
  </a>
);

export const TwitterBtnLink: React.FC = () => (
  <BtnLink href={CONFIG.url.twitter} icon={faTwitter} text="Twitter" />
);
export const InstagramBtnLink: React.FC = () => (
  <BtnLink href={CONFIG.url.instagram} icon={faInstagram} text="Instagram" />
);

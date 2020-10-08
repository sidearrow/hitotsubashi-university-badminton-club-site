import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ExternalLink: React.FC<{ href: string }> = ({
  href,
  children,
}) => (
  <span>
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="ml-1">
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </span>
    </a>
  </span>
);

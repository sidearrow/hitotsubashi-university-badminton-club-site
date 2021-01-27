import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ExternalLink: React.FC<{ href: string }> = ({
  href,
  children,
}) => (
  <span className="inline-flex align-center">
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
    <span className="ml-2 text-sm text-gray-600">
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </span>
  </span>
);

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const TwitterEmbed: React.FC = () => {
  const ID = 'twitterEmbedScript';

  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? faChevronUp : faChevronDown;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    document.getElementById(ID)?.replaceWith(script);
  }, []);

  return (
    <div className="border rounded-sm border-gray-400">
      <div className="py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div>
            <div className="text-lg text-gray-800">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="ml-2">Twitter</span>
            </div>
            <div className="text-gray-500">
              最新の部活情報や新歓情報を発信しています
            </div>
          </div>
          <div className="ml-4">
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <div className="mt-2">
          <a
            href="https://twitter.com/hit_u_bad?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-dnt="true"
            data-show-count="false"
          >
            Follow @hit_u_bad
          </a>
        </div>
      </div>
      <div className={`border-t border-gray-400 ${isOpen ? '' : 'hidden'}`}>
        <a
          data-width="500"
          data-height="500"
          className="twitter-timeline"
          href="https://twitter.com/hit_u_bad?ref_src=twsrc%5Etfw"
        >
          Tweets by hit_u_bad
        </a>
      </div>
      <div id={ID}></div>
    </div>
  );
};

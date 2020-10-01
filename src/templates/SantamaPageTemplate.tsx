import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import santamaFiles from '../../content/json/santama_files.json';

export const SantamaPageTemplate: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <>
        {santamaFiles.map((eachYear) => (
          <>
            <h3>{eachYear.label}</h3>
            <div>
              <ul>
                {eachYear.files.map((f, i) => (
                  <li key={i}>
                    <a
                      href={`/files/santama/${eachYear.year}/${f.filename}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {f.label}
                      <span className="ml-2">
                        <FontAwesomeIcon icon={faFilePdf} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </>
    </>
  );
};

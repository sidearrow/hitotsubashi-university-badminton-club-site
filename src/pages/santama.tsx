import React from 'react';
import { Layout } from '../components/Layout';

import content from '../../content/santama.json';
import { Button, ButtonColor } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FirebaseStorageLink } from '../components/FirebaseStorageLink';

const Component: React.FC = () => {
  const title = content.title;
  const description = content.description;
  const pastResults = content.pastResults;

  return (
    <Layout title={title} description={description}>
      <h2 className="h2">{pastResults.title}</h2>
      <section>
        {pastResults.content.map((eachYear) => (
          <>
            <h3 className="h3">{eachYear.title}</h3>
            {eachYear.files.map((files, i) => (
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-1 pb-2"
                key={i}
              >
                {files.map((f, i) => {
                  const color = f.color as ButtonColor;
                  return (
                    <div key={i}>
                      <a href={f.filename} target="_blank" rel="noreferrer">
                        <Button color={color}>
                          <div className="flex">
                            <span className="">
                              <FontAwesomeIcon icon={faFilePdf} />
                            </span>
                            <span className="flex-grow text-center">
                              {f.title}
                            </span>
                          </div>
                        </Button>
                      </a>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        ))}
      </section>
    </Layout>
  );
};

export default Component;

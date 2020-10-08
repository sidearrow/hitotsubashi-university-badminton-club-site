import { GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../components/Layout';

import content from '../../content/santama.json';
import { Button, ButtonColor } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FirebaseStorageLink } from '../components/FirebaseStorageLink';

type Content = {
  title: string;
  description: string;
  pastResults: {
    title: string;
    content: {
      title: string;
      year: number;
      files: {
        filename: string;
        title: string;
        color: string;
      }[][];
    }[];
  };
};

const Component: React.FC<Content> = ({ title, description, pastResults }) => {
  return (
    <Layout title={title} description={description}>
      <h1 className="h1">{title}</h1>
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
                      <FirebaseStorageLink storagePath={f.filename}>
                        <Button color={color}>
                          {f.title}
                          <span className="ml-2">
                            <FontAwesomeIcon icon={faFilePdf} />
                          </span>
                        </Button>
                      </FirebaseStorageLink>
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

export const getStaticProps: GetStaticProps<Content> = async () => {
  return { props: content };
};

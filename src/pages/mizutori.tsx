import React, { useContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { AuthGuard } from '../components/AuthGuard';
import { FirebaseStorageLink } from '../components/FirebaseStorageLink';
import { Button } from '../components/Button';
import { GetStaticProps } from 'next';
import { microCmsUtil } from '../lib/microCmsUtil';
import { ContentDebuger } from '../components/ContentDebuger';

type Content = {
  title: string;
  description: string;
  obmessage: {
    title: string;
    content: {
      year: number;
      files: {
        fileName: string;
        viewName: string;
      }[];
    }[];
  };
};

const ObMessage: React.FC<{ obmessages: Content['obmessage']['content'] }> = ({
  obmessages,
}) => {
  return (
    <>
      {obmessages.map((eachYear, i) => (
        <React.Fragment key={i}>
          <h3 className="h3">{eachYear.year} 年</h3>
          <section>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {eachYear.files.map((f, i) => (
                <FirebaseStorageLink
                  storagePath={`/mizutori/obmessage/${eachYear.year}/${f.fileName}`}
                  key={i}
                >
                  <Button color="gray">{f.viewName}</Button>
                </FirebaseStorageLink>
              ))}
            </div>
          </section>
        </React.Fragment>
      ))}
    </>
  );
};

const MainComponent: React.FC<{ content: Content }> = ({ content }) => {
  const title = content.title;
  const description = content.description;
  const obmessage = content.obmessage;

  return (
    <Layout title={title} description={description}>
      <div className="pt-8 pb-16">
        <div className="main-content">
          <h1 className="h1">{title}</h1>
          <AuthGuard>
            <section>
              <FirebaseStorageLink storagePath="/mizutori/mizutorikai-kaisoku.pdf">
                <Button color="gray">みずとり会会則</Button>
              </FirebaseStorageLink>
            </section>
            <h2 className="h2">{obmessage.title}</h2>
            <ObMessage obmessages={obmessage.content} />
          </AuthGuard>
        </div>
      </div>
    </Layout>
  );
};

const PageComponent: React.FC<{ content: Content }> = ({ content }) => {
  const [_content, setContent] = useState(content);
  return (
    <ContentDebuger content={_content} setContent={setContent}>
      <MainComponent content={_content} />
    </ContentDebuger>
  );
};

export const getStaticProps: GetStaticProps<{
  content: Content;
}> = async () => {
  const res = await microCmsUtil.get('/mizutori');
  const content = JSON.parse(res.content);
  return { props: { content: content } };
};

export default PageComponent;

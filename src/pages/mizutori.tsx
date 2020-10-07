import React from 'react';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { AuthGuard } from '../components/AuthGuard';
import { FirebaseStorageLink } from '../components/FirebaseStorageLink';

import obmessageList from '../../content/obmessage_list.json';

const Component: React.FC = () => {
  return (
    <Layout title="みずとり会" description="">
      <Container>
        <div className="pt-8 pb-16">
          <AuthGuard isAuthRequired={true}>
            <div className="main-content">
              <h1>みずとり会のページ</h1>
              <section>
                <FirebaseStorageLink storagePath="/mizutori/mizutorikai-kaisoku.pdf">
                  <a href="#">みずとり会会則</a>
                </FirebaseStorageLink>
              </section>
              <h2>OB 通信</h2>
              {obmessageList.map((eachYear) => (
                <>
                  <h3>{eachYear.year} 年</h3>
                  <section>
                    {eachYear.files.map((f, i) => (
                      <FirebaseStorageLink
                        storagePath={`/obmessage/${f.fileName}`}
                        key={i}
                      >
                        <a href="#">{f.lable}</a>
                      </FirebaseStorageLink>
                    ))}
                  </section>
                </>
              ))}
            </div>
          </AuthGuard>
        </div>
      </Container>
    </Layout>
  );
};

export default Component;

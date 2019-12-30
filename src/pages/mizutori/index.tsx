import React, { useEffect } from 'react';
import mizutoriAuthService from '../../services/mizutoriAuthService';
import { navigate } from 'gatsby';

import obMessages from '../../data/ob_messages.json';
import Layout from '../../components/layout';
import storageService from '../../services/storageService';

const Component: React.FC = props => {
  useEffect(() => {
    if (!mizutoriAuthService.isLogin()) {
      navigate('mizutori/login');
    };
  }, []);

  const clickLink = async (filePath: string) => {
    const url = await storageService.getDownloadUrl(filePath);
    if (window.open(url, "_blank")) {
    } else {
      window.location.href = url;
    }
  }

  return (
    <Layout isShowPageTitle={true} pageTitle="みずとり会" pageSubTitle="みずとり会のページです。">
      {obMessages.map((v, i) => (
        <>
          <h2 className="hub-h2" key={i}>{v.year} 年</h2>
          <div className="mb-3">
            {v.files.map((vFile, i) => (
              <a className="mr-2 v-inline-block" href="#" key={i} onClick={e => { clickLink(`ob-messages/obmessage_${vFile.id}.pdf`) }}>{vFile.title}</a>
            ))}
          </div>
        </>
      ))}
    </Layout>
  );
};


export default Component;

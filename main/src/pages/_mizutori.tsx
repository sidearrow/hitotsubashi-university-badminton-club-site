import React, { useState, useEffect } from 'react'
import Layout from '../components/layout';
import pageMetadata from '../pageMetaData';
import { navigate } from 'gatsby';
import Auth from '../auth';

const Component: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const logout = () => {
    (new Auth).logout();
    navigate('/mizutori-login');
  };

  useEffect(() => {
    (async () => {
      const isLogin = await (new Auth).isLogin();
      isLogin ? setIsShow(true) : navigate('/mizutori-login');
    })();
  }, []);

  return (
    <Layout pageMetadata={pageMetadata.mizutori}>
      {isShow
        ? (
          <div className="section">
            <div className="content has-text-right">
              <button className="button is-primary is-outlined" onClick={logout}>ログアウト</button>
            </div>
            <div><a href="**/obmessage/obmessage_201909.pdf" className="storage-link" target="__blank" data-path="obmessage/obmessage_201909.pdf">aaaaa</a></div>
          </div>
        )
        : (
          <></>
        )}
    </Layout>
  )
}

export default Component


import React, { useState, useEffect } from 'react'
import Layout from '../components/layout';
import pageMetadata from '../pageMetaData';
import { isMizutoriLogin, mizutoriLogout } from '../auth';
import { navigate } from 'gatsby';

const Component: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const logout = () => {
    mizutoriLogout();
    navigate('/mizutori-login');
  };

  useEffect(() => {
    (async () => {
      const isLogin = await isMizutoriLogin();
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
          </div>
        )
        : (
          <></>
        )}
    </Layout>
  )
}

export default Component


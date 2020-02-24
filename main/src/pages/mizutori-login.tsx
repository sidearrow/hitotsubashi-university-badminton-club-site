import React, { useEffect } from 'react'
import Layout from '../components/layout';
import pageMetadata from '../pageMetaData';
import { navigate } from 'gatsby';
import Auth from '../auth';

const Component: React.FC = () => {
  useEffect(() => {
    document.getElementById('loginButton')?.addEventListener('click', async () => {
      const inputPassword = (document.getElementById('inputPassword') as HTMLInputElement).value;
      const isLoginSuccess = await (new Auth).login(inputPassword);
      if (isLoginSuccess) {
        navigate('/mizutori');
      }
    });
  }, []);

  return (
    <Layout pageMetadata={pageMetadata.mizutori}>
      <div className="section">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <input className="input" type="password" id="inputPassword" placeholder="パスワード" />
                </div>
                <div className="content has-text-centered">
                  <button className="button is-primary is-outlined" id="loginButton">ログイン</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Component


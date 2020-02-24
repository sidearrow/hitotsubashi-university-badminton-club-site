import React from 'react'
import Layout from '../components/layout';
import pageMetadata from '../pageMetaData';
import { mizutoriLogin } from '../auth';
import { navigate } from 'gatsby';

const Component: React.FC = () => {
  const login = async () => {
    const inputPassword = (document.getElementById('inputPassword') as HTMLInputElement).value;
    const res = await mizutoriLogin(inputPassword);
    if (res) {
      navigate('/mizutori');
    }
  };

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
                  <button className="button is-primary is-outlined" onClick={login}>ログイン</button>
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


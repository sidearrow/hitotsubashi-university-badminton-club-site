import React from 'react'
import { navigate } from 'gatsby';

import Layout from '../../components/layout';
import mizutoriAuthService from '../../services/mizutoriAuthService';

const Component = () => {
  const [isError, setIsError] = React.useState(false);
  const handleClickLogin = async () => {
    try {
      await mizutoriAuthService.login(document.getElementById('inputPassword').value);
      navigate('mizutori');
    } catch (e) {
      setIsError(true);
    }
  };

  return (
    <Layout isShowPageTitle={true} pageTitle="みずとり会 ログイン" pageSubTitle="みずとり会ページのコンテンツを見るにはログインしてください。">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="form-group">
            <label>パスワード</label>
            <input type="password" className={`form-control ${isError ? 'is-invalid' : ''}`} id="inputPassword" />
            <div className="invalid-feedback">パスワードが間違っています</div>
            <small>現会長の名前をローマ字表記・英小文字のみで入力してください</small>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <button type="button" className="btn btn-block btn-outline-main" onClick={handleClickLogin}>ログイン</button>
        </div>
      </div>
    </Layout>
  )
};

export default Component;

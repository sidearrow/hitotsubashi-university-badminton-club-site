import React from 'react';

const PageMizutoriLogin: React.FC = () => {
  return (
    <div>
      <h1 className="title-main">みずとり会 ログイン</h1>
      <form>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="alert alert-info mb-5">コンテンツを見るにはログインしてください。</div>
            <div className="form-group">
              <label>パスワード</label>
              <input
                type="password"
                v-model="inputPassword"
                className="form-control"
              />
              <div className="invalid-feedback">{'errorMessage'}</div>
              <small>現会長の名前をローマ字表記・英小文字のみで入力してください</small>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-4">
            <button type="submit" className="btn btn-block btn-outline-main">ログイン</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageMizutoriLogin;

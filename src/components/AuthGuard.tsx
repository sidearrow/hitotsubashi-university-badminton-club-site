import React, { useState, useEffect } from 'react';
import FirebaseService from '../FirebaseService';
import { setEventStorageLink } from '../domUtils';

export const AuthGuard: React.FC<{ isAuthRequired: boolean }> = ({
  isAuthRequired,
  children,
}) => {
  if (!isAuthRequired) {
    return <>{children}</>;
  }

  const [isNowLoading, setIsNowLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginFail, setIsLoginFail] = useState(false);

  const firebaseService = new FirebaseService();

  const handleLogout = () => {
    firebaseService.logout()?.then(() => {
      setIsLogin(false);
    });
  };

  const handleLogin = () => {
    const inputPassword = (document.getElementById(
      'inputPassword'
    ) as HTMLInputElement).value;
    setIsNowLoading(true);
    firebaseService.login(inputPassword).then(v => {
      setIsLogin(v);
      setIsLoginFail(!v);
      setIsNowLoading(false);
      if (v) {
        setEventStorageLink();
      }
    });
  };

  useEffect(() => {
    firebaseService.isLogin().then(res => {
      setIsNowLoading(false);
      setIsLogin(res);
      if (res) {
        setEventStorageLink();
      }
    });
  }, []);

  if (isNowLoading) {
    return (
      <div className="text-center">
        <span className="spinner-grow spinner-grow-sm"></span>
        <span className="ml-2">ログイン情報取得中......</span>
      </div>
    );
  }

  if (isLogin) {
    return (
      <>
        <div className="text-right">
          <button className="btn btn-outline-secondary" onClick={handleLogout}>
            ログアウト
          </button>
        </div>
        {children}
      </>
    );
  }

  return (
    <>
      <div className="section">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5>みずとり会 ログイン</h5>
                <input
                  className="form-control"
                  type="password"
                  id="inputPassword"
                  placeholder="パスワード"
                />
                <div className="invalid-feedback d-block">
                  {isLoginFail && 'ログインに失敗しました'}
                </div>
                <div className="row mt-4 justify-content-center">
                  <div className="col-md-6 col-8">
                    <button
                      className="btn btn-block btn-outline-main"
                      id="loginButton"
                      onClick={handleLogin}
                    >
                      ログイン
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

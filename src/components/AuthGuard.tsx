import React, { useState, useEffect } from 'react';
import FirebaseService from '../FirebaseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
    firebaseService.login(inputPassword).then((v) => {
      setIsLogin(v);
      setIsLoginFail(!v);
      setIsNowLoading(false);
      if (v) {
        setEventStorageLink();
      }
    });
  };

  useEffect(() => {
    firebaseService.isLogin().then((res) => {
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
        <span className="ml-2">ログイン情報取得中......</span>
      </div>
    );
  }

  if (isLogin) {
    return (
      <>
        <div className="text-right mb-4">
          <button onClick={handleLogout}>ログアウト</button>
        </div>
        {children}
      </>
    );
  }

  return (
    <>
      <div className="section">
        <div className="flex border-b border-gray-500 py-2 items-center">
          <input
            className="appearance-none bg-transparent border-none w-full focus:outline-none"
            type="password"
            id="inputPassword"
            placeholder="パスワード"
          />
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleLogin}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="text-red-600 mt-2">
          {isLoginFail && 'ログインに失敗しました'}
        </div>
      </div>
    </>
  );
};

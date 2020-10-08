import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  firebaseAuthIsLogin,
  firebaseAuthLogin,
  firebaseAuthLogout,
} from '../lib/firebaseUtils';

export const AuthGuard: React.FC = ({ children }) => {
  const [isNowLoading, setIsNowLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginFail, setIsLoginFail] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const handleLogout = () => {
    (async () => {
      await firebaseAuthLogout();
      setIsLogin(false);
    })();
  };

  const handleLogin = () => {
    (async () => {
      setIsNowLoading(true);
      try {
        await firebaseAuthLogin(inputPassword);
        setIsLogin(true);
        setIsLoginFail(false);
      } catch {
        setIsLogin(false);
        setIsLoginFail(true);
      }
      setIsNowLoading(false);
    })();
  };

  useEffect(() => {
    (async () => {
      setIsLogin(await firebaseAuthIsLogin());
      setIsNowLoading(false);
    })();
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
            value={inputPassword}
            onChange={(e) => {
              setInputPassword(e.target.value);
            }}
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

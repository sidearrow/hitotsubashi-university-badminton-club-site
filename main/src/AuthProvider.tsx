import React, { useState, useEffect } from 'react';
import Auth from './auth';
import { navigate } from 'gatsby';

export enum AuthStatus {
  BeforeConfirm,
  NotLogin,
  Login,
};

export const AuthContext = React.createContext(AuthStatus.BeforeConfirm);

const AuthProvider: React.FC<{
  isAuthRequired: boolean
}> = props => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.BeforeConfirm);

  useEffect(() => {
    (async () => {
      const isLogin = await (new Auth).isLogin();
      setAuthStatus(isLogin ? AuthStatus.Login : AuthStatus.NotLogin);
      if (props.isAuthRequired && !isLogin) {
        navigate('/mizutori-login');
        return;
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={authStatus}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { useState, useEffect } from 'react';
import Auth from './auth';

export enum AuthStatus {
  BeforeConfirm,
  NotLogin,
  Login,
};

export const AuthContext = React.createContext(AuthStatus.BeforeConfirm);

const AuthProvider: React.FC = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.BeforeConfirm);

  useEffect(() => {
    (async () => {
      const isLogin = await (new Auth).isLogin();
      setAuthStatus(isLogin ? AuthStatus.Login : AuthStatus.NotLogin);
    })();
  }, []);

  return (
    <AuthContext.Provider value={authStatus}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

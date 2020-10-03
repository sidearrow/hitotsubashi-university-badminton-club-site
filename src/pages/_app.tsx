import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/style.css';
import '../styles/markdown.scss';

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/index.css';
import { PreviewDispatcher } from '../components/PreviewDispatcher';

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <PreviewDispatcher>
        <Component {...pageProps} />
      </PreviewDispatcher>
    </>
  );
};

export default MyApp;

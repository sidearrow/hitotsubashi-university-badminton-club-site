import React from 'react';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import { useAmp } from 'next/amp';
import { AmpSidebar } from '../components/AmpSidebar';

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <script
          async
          custom-element="amp-accordion"
          src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-sidebar"
          src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

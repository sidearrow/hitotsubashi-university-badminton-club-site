import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { CONFIG } from '../config';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja" className="text-gray-800">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ac2926" />
          <meta name="theme-color" content="#ac2926" />
          <meta
            name="google-site-verification"
            content={CONFIG.googleSiteVerification}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
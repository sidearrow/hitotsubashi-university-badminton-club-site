import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// @ts-ignore
import stylecss from '!raw-loader!../styles/bundle.css';
import { CONFIG } from '../config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...page,
      styles: [
        ...(initialProps.styles as React.Component[]),
        <style dangerouslySetInnerHTML={{ __html: stylecss }} key="custom" />,
      ],
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
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
          <script
            async
            custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
          ></script>
          <script
            async
            custom-element="amp-twitter"
            src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"
          ></script>
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

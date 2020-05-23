import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';

const Head: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  title = (title === '' ? '' : `${title} | `) + config.siteMetaData.siteName;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content={config.googleSiteVerification}
      />
      <meta name="description" content={description} />
      <meta name="theme-color" content={config.siteMetaData.themeColor} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={config.siteMetaData.siteName} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={config.siteMetaData.twitterId} />
    </Helmet>
  );
};

export default Head;

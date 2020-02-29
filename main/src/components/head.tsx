import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';
import { PageMetadata } from '../pageMetaData';

const fontUrl = 'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Roboto&display=swap';
const metaKeywords = [
  '一橋',
  '大学',
  '一橋大学',
  'バドミントン',
  '体育会',
];

const Head: React.FC<{
  pageMetadata: PageMetadata;
}> = (props) => {return (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.pageMetadata.title ? `${props.pageMetadata.title} | 一橋大学バドミントン部` : '一橋大学バドミントン部'}</title>
    <meta name="google-site-verification" content={config.googleSiteVerification} />
    <meta name="description" content={props.pageMetadata.description} />
    <meta name="keywords" content={metaKeywords.join(',')} />
    <meta name="theme-color" content="#ac2926" />
    <link href={fontUrl} rel="stylesheet" />
  </Helmet>
)};

export default Head;

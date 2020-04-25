import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';

const metaKeywords = [
  '一橋',
  '大学',
  '一橋大学',
  'バドミントン',
  '体育会',
];

const Head: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ title === '' ? '' : `${title} | ` }一橋大学バドミントン部</title>
    <meta name="google-site-verification" content="GwKaCAPJJGs62_4LGniFH-oxWWIDqDODoGd6eK28__0" />
    <meta name="description" content={description} />
    <meta name="keywords" content={metaKeywords.join(',')} />
    <meta name="theme-color" content="#ac2926" />
  </Helmet>
);

export default Head;

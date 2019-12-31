import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../config';

const fontUrl = 'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Roboto&display=swap';

type Props = {
  title?: string;
};

const Head: React.FC<Props> = props => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta lang="ja" />
    <meta name="google-site-verification" content={config.googleSiteVerification} />
    <title>{props.title ? `${props.title} | 一橋大学バドミントン部` : '一橋大学バドミントン部'}</title>
    <link href={fontUrl} rel="stylesheet" />
  </Helmet>
);

export default Head;

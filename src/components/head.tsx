import React from 'react';
import { Helmet } from 'react-helmet';

const fontUrl = 'https://fonts.googleapis.com/css?family=Noto+Serif+JP|Roboto:300&display=swap';

type Props = {
  title?: string;
};

const Head: React.FC<Props> = props => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta lang="ja" />
    <title>{props.title ? `${props.title} | 一橋大学バドミントン部` : '一橋大学バドミントン部'}</title>
    <link href={fontUrl} rel="stylesheet" />
  </Helmet>
);

export default Head;

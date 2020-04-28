import React from 'react';

export const MarkdownTemplate: React.FC<{
  isPreview: boolean;
  title: string;
  description: string;
  html: string;
}> = ({ isPreview, html }) => {
  if (isPreview) {
    return <div>{html}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default MarkdownTemplate;

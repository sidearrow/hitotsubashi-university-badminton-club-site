import React from 'react';

export const MarkdownTemplate: React.FC<{
  isPreview: boolean;
  title: string;
  description: string;
  html: string;
}> = ({ isPreview, html }) => {
  if (isPreview) {
    return <div className="main-content">{html}</div>;
  }

  return (
    <div
      className="main-content"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};

export default MarkdownTemplate;

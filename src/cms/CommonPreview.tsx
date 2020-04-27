import React from 'react';
import { TemplateDispatcher } from '../templates/CoreTemplate';

const AboutPreview: React.FC = ({ entry }: any) => {
  const data = entry.toJS().data;

  let pageContent;
  if (data.contentType === 'json') {
    try {
      pageContent = JSON.parse(data.data.content);
    } catch {
      return (<div>JSON の解析に失敗しました</div>);
    }
  }

  return (
    <TemplateDispatcher
      contentType={data.contentType}
      title={data.title}
      description={data.description}
      templateFile={data.template}
      html={data.html}
      pageContent={pageContent}
    />
  )
};

export default AboutPreview;

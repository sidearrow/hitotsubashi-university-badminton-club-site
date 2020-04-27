import React from 'react';
import { TemplateDispatcher } from '../templates/TemplateDispatcher';

const AboutPreview: React.FC = ({ entry ,widgetFor }: any) => {
  const data = entry.toJS().data;

  let pageContent;
  if (data.contentType === 'json') {
    try {
      pageContent = JSON.parse(data.content);
    } catch {
      return (<div>JSON の解析に失敗しました</div>);
    }
  }

  return (
    <TemplateDispatcher
      isPreview={true}
      contentType={data.contentType}
      title={data.title}
      description={data.description}
      templateFile={data.template}
      html={widgetFor('body')}
      pageContent={pageContent}
    />
  )
};

export default AboutPreview;

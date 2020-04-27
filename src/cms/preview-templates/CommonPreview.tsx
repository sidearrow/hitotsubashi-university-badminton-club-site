import React from 'react';
import { TemplateDispatcher } from '../../templates/CoreTemplate';

const AboutPreview: React.FC = ({ entry }: any) => {
  const data = entry.toJS();

  let pageContent;
  try {
    pageContent = JSON.parse(data.data.pageContent);
  } catch {
    return (<div>JSON の解析に失敗しました</div>);
  }

  return (
    <TemplateDispatcher
      title={data.data.title}
      description={data.data.description}
      templateFile={data.data.template}
      pageContent={pageContent}
    />
  )
};

export default AboutPreview;

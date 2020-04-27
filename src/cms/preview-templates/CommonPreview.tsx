import React from 'react';
import { TemplateDispatcher } from '../../templates/CoreTemplate';

const AboutPreview: React.FC = ({ entry }: any) => {
  const data = entry.toJS();
  console.log(data)

  return (
    <TemplateDispatcher
      title={data.data.title}
      description={data.data.description}
      templateFile={data.data.template}
      pageContent={data.data.pageContent}
    />
  )
};

export default AboutPreview;

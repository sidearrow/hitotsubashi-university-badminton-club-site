import React from 'react';
import { TemplateDispatcher } from '../templates/TemplateDispatcher';

const AboutPreview: React.FC = ({ entry, widgetFor }: any) => {
  const data = entry.toJS().data;

  return (
    <TemplateDispatcher
      isPreview={true}
      title={data.title}
      description={data.description}
      html={widgetFor('body')}
      breadcrumbs={[]}
      isAuthRequired={false}
    />
  );
};

export default AboutPreview;

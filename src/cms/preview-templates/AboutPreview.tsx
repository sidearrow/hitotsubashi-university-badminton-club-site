import React from 'react';
import { AboutPageTemplate } from '../../templates/AboutPageTemplate';

const AboutPreview: React.FC = ({ entry }: any) => {
  const data = entry.toJS();
  return (
    <AboutPageTemplate
      title={data.data.title}
      description={data.data.description}
      positions={data.data.positions}
      practiceTime={data.data.practiceTime}
    />
  )
};

export default AboutPreview;

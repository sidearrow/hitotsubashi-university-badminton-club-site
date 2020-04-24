import React from 'react';
import { AboutPageTemplate } from '../../templates/AboutPageTemplate';

const AboutPreview: React.FC = ({ entry }: any) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
  />
);

export default AboutPreview;

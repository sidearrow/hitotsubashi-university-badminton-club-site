import React from 'react';
import { PageContentAbout } from '../pageContentType';
import CmpAuthGuard from '../components/CmpAuthGuard';

const MizutoriPageTemplate: React.FC<{
  isPreview: boolean;
  title: string;
  description: string;
  pageContent: PageContentAbout;
}> = ({ isPreview, title, description, pageContent }) => {
  const main = (<div>MIZUTORI</div>)

  if (isPreview) {
    return main;
  }

  return (<CmpAuthGuard>{main}</CmpAuthGuard>);
};

export default MizutoriPageTemplate;

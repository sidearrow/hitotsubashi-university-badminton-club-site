import React from 'react';
import Layout from '../components/Layout';
import { PageContentAbout } from '../pageContentType';
import { Link } from 'gatsby';
import CmpAuthGuard from '../components/CmpAuthGuard';

const MizutoriPageTemplate: React.FC<{
  isPreview: boolean;
  title: string;
  description: string;
  pageContent: PageContentAbout;
}> = ({ isPreview, title, description, pageContent }) => {
  const main = (<div>MIZUTORI</div>)

  return (
    <Layout title={title} description={description}>
      {isPreview && main}
      {!isPreview && (<CmpAuthGuard>{main}</CmpAuthGuard>)}
    </Layout>
  )
};

export default MizutoriPageTemplate;

import React from 'react';
import Layout from '../components/Layout';
import { PageContentAbout } from '../pageContentType';
import { Link } from 'gatsby';
import CmpAuthGuard from '../components/CmpAuthGuard';

const MizutoriPageTemplate: React.FC<{
  title: string;
  description: string;
  pageContent: PageContentAbout;
}> = ({ title, description, pageContent }) => {
  return (
    <Layout title={title} description={description}>
      <CmpAuthGuard>
        <div>MIZUTORI</div>
      </CmpAuthGuard>
    </Layout>
  )
};

export default MizutoriPageTemplate;

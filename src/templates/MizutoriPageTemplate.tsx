import React from 'react';
import Layout from '../components/Layout';
import { PageContentAbout } from '../pageContentType';
import { Link } from 'gatsby';

const MizutoriPageTemplate: React.FC<{
  title: string;
  description: string;
  pageContent: PageContentAbout;
}> = ({ title, description, pageContent }) => {
  return (
    <Layout title={title} description={description}>
      <div>MIZUTORI</div>
    </Layout>
  )
};

export default MizutoriPageTemplate;

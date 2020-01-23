import React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby';
import config from '../config/configIndex';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={config.pageMetadata.santama}>
    </Layout>
  )
}

export default Component


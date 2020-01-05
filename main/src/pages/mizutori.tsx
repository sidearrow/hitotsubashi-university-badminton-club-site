import React from 'react'
import Layout from '../components/layout';
import config from '../config/configIndex';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={config.pageMetadata.mizutori}>
      <div>準備中</div>
    </Layout>
  )
}

export default Component


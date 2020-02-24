import React from 'react'
import Layout from '../components/layout';
import pageMetadata from '../pageMetaData';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={pageMetadata.mizutori}>
      <div className="section">
        <h1>みずとり会のページ</h1>
        <div>準備中</div>
      </div>
    </Layout>
  )
}

export default Component


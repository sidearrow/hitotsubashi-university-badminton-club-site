import React from 'react'
import Layout from '../components/layout';
import config from '../config/configIndex';
import PageCardList from '../components/pageCardList';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={config.pageMetadata.resultIndex}>
      <section>
        <PageCardList pageList={[config.pageMetadata.resultLeague, config.pageMetadata.resultSansho]} />
      </section>
    </Layout>
  )
}

export default Component

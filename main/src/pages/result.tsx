import React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby';
import config from '../config/configIndex';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={config.pageMetadata.resultIndex}>
      <section className="section">
        <div>
          <Link to="/result/league">リーグ戦</Link>
        </div>
        <div>
          <Link to="/result/sansho">三商戦</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Component

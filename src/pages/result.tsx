import React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Component: React.FC = () => {
  return (
    <Layout>
      <section className="section">
        <h1 className="hub-h1">大会結果</h1>
        <Link to="result/league">リーグ戦</Link>
      </section>
    </Layout>
  )
}

export default Component
